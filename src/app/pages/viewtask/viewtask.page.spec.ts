import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewtaskPage } from './viewtask.page';

describe('ViewtaskPage', () => {
  let component: ViewtaskPage;
  let fixture: ComponentFixture<ViewtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
