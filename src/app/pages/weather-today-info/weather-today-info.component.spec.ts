import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTodayInfoComponent } from './weather-today-info.component';

describe('WeatherTodayInfoComponent', () => {
  let component: WeatherTodayInfoComponent;
  let fixture: ComponentFixture<WeatherTodayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherTodayInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherTodayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
