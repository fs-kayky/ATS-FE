import { inject, Injectable } from '@angular/core';
import { JobRole } from '../../interfaces/RolesInterfaces';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private http = inject(HttpClient)

  async getRoles(): Promise<JobRole[]> {
    return firstValueFrom(this.http.get<JobRole[]>('http://localhost:5693/jobs'));
  }

}
