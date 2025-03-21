import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'ats-theme';
  private readonly defaultTheme = 'dark';

  constructor() {}

  applyTheme(theme: string) {
    const themeLink = document.getElementById('ats-theme') as HTMLLinkElement;

    if(themeLink) {
      themeLink.href = `${theme}.css`;
    }

    localStorage.setItem(this.themeKey, theme);
  }

  getStoredTheme() {
    return localStorage.getItem(this.themeKey) || this.defaultTheme;
  }

  loadTheme () {
    const storedTheme = this.getStoredTheme();
    this.applyTheme(storedTheme);
  }

}
