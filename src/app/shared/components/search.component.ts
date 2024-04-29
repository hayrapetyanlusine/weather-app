import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="search-container">
      <img src="../../../assets/svgs/search.svg" alt="search"/>
      <input type="search" placeholder="Search for city...">
    </div>
  `,
  standalone: true,
  imports: [],
  styles: `
    :host {
      width: 100%;

      .search-container {
        max-width: 1200px;
        width: 100%;
        position: relative;
        margin: 0 auto;
        color: var(--white);

        img {
          position: absolute;
          top: 15px;
          left: 10px;
          width: 20px;
          height: 20px;
          pointer-events: none;
        }

        input[type="search"] {
          padding: 16px 16px 16px 42px;
          width: 100%;
          border-radius: 8px;
          border: 2px solid var(--secondary);
          background: var(--secondaryLight);
        }
      }
    }
  `
})
export class SearchComponent {

}
