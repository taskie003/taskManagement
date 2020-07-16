import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingtaskPage } from './pendingtask.page';

describe('PendingtaskPage', () => {
  let component: PendingtaskPage;
  let fixture: ComponentFixture<PendingtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingtaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
