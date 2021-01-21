import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutlethomePage } from './outlethome.page';

describe('OutlethomePage', () => {
  let component: OutlethomePage;
  let fixture: ComponentFixture<OutlethomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlethomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutlethomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
