import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomenewPage } from './homenew.page';

describe('HomenewPage', () => {
  let component: HomenewPage;
  let fixture: ComponentFixture<HomenewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomenewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
