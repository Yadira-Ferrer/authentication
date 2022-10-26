import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme: boolean = true;

  public get darktheme() {
    return this._darkTheme;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      this._darkTheme = theme === 'saga-blue' ? false : true;
      themeLink.href = theme + '.css';
    }
  }
}
