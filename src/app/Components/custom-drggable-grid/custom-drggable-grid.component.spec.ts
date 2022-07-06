import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrggableGridComponent } from './custom-drggable-grid.component';

describe('CustomDrggableGridComponent', () => {
  let component: CustomDrggableGridComponent;
  let fixture: ComponentFixture<CustomDrggableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDrggableGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDrggableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
