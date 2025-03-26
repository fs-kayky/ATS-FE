import { Candidato } from './../../interfaces/Candidate';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/jobService/job.service';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-managment',
  standalone: true,
  imports: [CommonModule, TabViewModule, TableModule, ButtonModule, RatingModule, FormsModule],
  templateUrl: './jobs-managment.component.html',
  styleUrl: './jobs-managment.component.scss'
})
export class JobsManagmentComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private jobService = inject(JobService)

  jobId: string | null = null
  jobInfo: any
  jobCandidates: Candidato[] = []
  jobsRejected: Candidato[] = []
  jobsPreAproved: Candidato[] = []
  jobsRevision: Candidato[] = []
  jobsP2P: Candidato[] = []
  jobsOfferted: Candidato[] = []
  jobsContracted: Candidato[] = []

  totalCandidates: number = 0
  totalJobRej: number = 0
  totalJobPreAprov: number = 0
  totalJobRevision: number = 0
  totalJobP2P: number = 0
  totalJobOfferted: number = 0
  totalJobConstracted: number = 0

  async ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      this.jobId = params.get('jobId')

      if (this.jobId) {
        try {
          this.jobInfo = await this.jobService.getJobById(this.jobId)

          if (!this.jobInfo || !this.jobInfo.candidates) {
            console.error("Nenhum candidato encontrado.")
            return
          }

          this.totalCandidates = this.jobInfo.candidates.length
          this.jobCandidates = this.jobInfo.candidates

          this.jobsRejected = []
          this.jobsPreAproved = []
          this.jobsRevision = []
          this.jobsP2P = []
          this.jobsOfferted = []
          this.jobsContracted = []

          this.totalJobRej = 0
          this.totalJobPreAprov = 0
          this.totalJobRevision = 0
          this.totalJobP2P = 0
          this.totalJobOfferted = 0
          this.totalJobConstracted = 0

          this.jobCandidates.forEach((candidato: any) => {
            if (candidato.match < 50) {
              this.jobsRejected.push(candidato)
              this.totalJobRej++
            } else if (candidato.match >= 80) {
              this.jobsPreAproved.push(candidato)
              this.totalJobPreAprov++
            } else if (candidato.match >= 50 && candidato.match < 75) {
              this.jobsRevision.push(candidato)
              this.totalJobRevision++
            } else if (candidato.match >= 75) {
              this.jobsP2P.push(candidato)
              this.totalJobP2P++
            } else if (candidato.match >= 85) {
              this.jobsOfferted.push(candidato)
              this.totalJobOfferted++
            } else {
              this.jobsContracted.push(candidato)
              this.totalJobConstracted++
            }
          })

          console.log(this.jobCandidates)
          console.log(this.jobsRejected)

        } catch (error) {
          console.error("Erro ao buscar os dados da vaga:", error)
        }
      }
    })
  }
}

