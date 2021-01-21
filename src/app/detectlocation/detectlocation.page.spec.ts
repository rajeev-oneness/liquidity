import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetectlocationPage } from './detectlocation.page';

describe('DetectlocationPage', () => {
  let component: DetectlocationPage;
  let fixture: ComponentFixture<DetectlocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectlocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectlocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
