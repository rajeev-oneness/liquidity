import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpverificationPage } from './otpverification.page';

describe('OtpverificationPage', () => {
  let component: OtpverificationPage;
  let fixture: ComponentFixture<OtpverificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpverificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpverificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
