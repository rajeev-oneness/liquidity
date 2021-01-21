import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MywalletPage } from './mywallet.page';

describe('MywalletPage', () => {
  let component: MywalletPage;
  let fixture: ComponentFixture<MywalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MywalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MywalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
