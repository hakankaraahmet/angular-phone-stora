import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccessoriesComponent } from './create-accessories.component';

describe('CreateAccessoriesComponent', () => {
  let component: CreateAccessoriesComponent;
  let fixture: ComponentFixture<CreateAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
