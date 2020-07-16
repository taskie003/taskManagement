import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomsortPage } from './customsort.page';

describe('CustomsortPage', () => {
  let component: CustomsortPage;
  let fixture: ComponentFixture<CustomsortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomsortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomsortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
