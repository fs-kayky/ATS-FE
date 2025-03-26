import { inject, Injectable } from '@angular/core';
import { JobRole } from '../../../roles/interfaces/RolesInterfaces';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private http = inject(HttpClient)

  async getJobById(job_id: string): Promise<JobRole> {
    return firstValueFrom(this.http.get<JobRole>(`http://localhost:5693/job-info/${job_id}`))
  }

}
