import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderdetailsredeemedPage } from './orderdetailsredeemed.page';

describe('OrderdetailsredeemedPage', () => {
  let component: OrderdetailsredeemedPage;
  let fixture: ComponentFixture<OrderdetailsredeemedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailsredeemedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderdetailsredeemedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
