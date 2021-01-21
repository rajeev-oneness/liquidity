import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaulthomePage } from './vaulthome.page';

describe('VaulthomePage', () => {
  let component: VaulthomePage;
  let fixture: ComponentFixture<VaulthomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaulthomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaulthomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
