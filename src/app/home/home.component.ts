import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { housingLocationList } from '../../utils/mockHousingLocationList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation" [baseUrl]='baseUrl'></app-housing-location>
    </section>
  `,
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseUrl = 'https://angular.dev/assets/tutorials/common';
  
  
  housingLocationList: HousingLocation[] = housingLocationList

}
