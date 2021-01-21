import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderredeemedPage } from './orderredeemed.page';

describe('OrderredeemedPage', () => {
  let component: OrderredeemedPage;
  let fixture: ComponentFixture<OrderredeemedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderredeemedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderredeemedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
