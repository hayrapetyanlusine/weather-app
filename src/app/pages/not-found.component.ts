import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  `,
  styles: `
    .not-found {
      text-align: center;
      margin: 150px;

      h1 {
        font-size: 36px;
        color: firebrick;
      }

      p {
        font-size: 18px;
        color: #666;
      }
    }
  `
})
export class NotFoundComponent {

}
