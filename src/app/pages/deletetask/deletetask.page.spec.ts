import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletetaskPage } from './deletetask.page';

describe('DeletetaskPage', () => {
  let component: DeletetaskPage;
  let fixture: ComponentFixture<DeletetaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
