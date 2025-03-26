import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  private sidebarService = inject(SidebarService)
  private router = inject(Router)
  isOpen!: boolean;

  ngOnInit(): void {

    this.sidebarService.sidebarState$.subscribe((a) => {
      this.isOpen = a
    })

  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  customClose() {
    this.sidebarService.toggle()
  }

  goTo(path: string) {

    this.router.navigate([path])
    this.toggleSidebar()

  }

}
