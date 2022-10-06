import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessoriesComponent } from './edit-accessories.component';

describe('EditAccessoriesComponent', () => {
  let component: EditAccessoriesComponent;
  let fixture: ComponentFixture<EditAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
