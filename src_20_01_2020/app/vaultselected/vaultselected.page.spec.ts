import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaultselectedPage } from './vaultselected.page';

describe('VaultselectedPage', () => {
  let component: VaultselectedPage;
  let fixture: ComponentFixture<VaultselectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultselectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaultselectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
