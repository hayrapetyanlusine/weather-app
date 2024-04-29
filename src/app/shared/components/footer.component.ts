import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer">
      <div class="container">
        <p>Powered by
          <span>
          <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI.com</a>
        </span>
        </p>
      </div>
    </footer>
  `,
  standalone: true,
  imports: [],
  styles: `
    #footer {
      background: var(--secondary);
      display: flex;
      align-items: center;

      p {
        color: var(--white);
        font-size: 14px;
        font-style: italic;
        display: flex;
         span {
           padding: 0 4px;
         }
      }
    }
  `
})
export class FooterComponent {

}
