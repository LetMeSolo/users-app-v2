import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosUserComponent } from './photos-user.component';

describe('PhotosUserComponent', () => {
  let component: PhotosUserComponent;
  let fixture: ComponentFixture<PhotosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
