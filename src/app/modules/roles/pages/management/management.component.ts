import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RoleService } from '../../services/roleService/role-service.service';
import { JobRole } from '../../interfaces/RolesInterfaces';
import { LoadingComponent } from "../../../global/components/loading/loading.component";
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [TableModule, CommonModule, LoadingComponent, ButtonModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent implements OnInit {

  private roleService = inject(RoleService)
  private router = inject(Router)

  roles!: JobRole[]
  isLoading: boolean = true

  async ngOnInit() {

    this.roles = await this.roleService.getRoles()
    this.isLoading = false
  }


  goToRole(jobId: string) {

    this.router.navigate([`job-managment/${jobId}`])

  }

}
