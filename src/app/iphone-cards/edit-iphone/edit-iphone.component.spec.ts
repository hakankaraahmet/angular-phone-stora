import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIphoneComponent } from './edit-iphone.component';

describe('EditIphoneComponent', () => {
  let component: EditIphoneComponent;
  let fixture: ComponentFixture<EditIphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
