import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header id="header">
      <div class="container">
        <h2 id="header-title">Weather app</h2>
        <div class="dark-mode" (click)="toggleTheme()">
          <img
            [src]="theme() === 'dark'
            ? '../../../assets/svgs/sun.svg'
            : '../../../assets/svgs/moon.svg'"/>
        </div>
      </div>
    </header>
  `,
  standalone: true,
  styles: `
    #header {
      background: var(--opacityPrimery);

      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-size: 28px;
          color: var(--white);
        }

        .dark-mode {
          cursor: pointer;
          width: 30px;
          height: 30px;
        }

        @media screen and (max-width: 520px) {
          h2 {
            font-size: 22px;
          }
        }
      }
    }
  `,
})
export class HeaderComponent {
  theme: WritableSignal<string> = signal("dark");

  constructor() {
    const savedTheme: string | null = localStorage.getItem("theme");

    savedTheme
      ? this.theme.set(savedTheme)
      : localStorage.setItem("theme", this.theme());
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');

    localStorage.setItem('theme', this.theme());
  }
}
