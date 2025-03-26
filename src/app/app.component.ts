import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './modules/global/services/theme/theme.service';
import { HeaderComponent } from "./modules/global/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ATS';
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.loadTheme();
  }


}
