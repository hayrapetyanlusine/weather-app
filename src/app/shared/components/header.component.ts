import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header id="header">
        <div class="container">
          <h2 id="header-title">Weather app</h2>
          <div class="dark-mode">Icon</div>
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
          background: var(--orange);
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

}
