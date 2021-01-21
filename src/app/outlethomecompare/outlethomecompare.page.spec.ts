import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutlethomecomparePage } from './outlethomecompare.page';

describe('OutlethomecomparePage', () => {
  let component: OutlethomecomparePage;
  let fixture: ComponentFixture<OutlethomecomparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlethomecomparePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutlethomecomparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
