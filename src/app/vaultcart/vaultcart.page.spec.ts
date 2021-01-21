import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaultcartPage } from './vaultcart.page';

describe('VaultcartPage', () => {
  let component: VaultcartPage;
  let fixture: ComponentFixture<VaultcartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultcartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaultcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
