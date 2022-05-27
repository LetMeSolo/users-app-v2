import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsUserComponent } from './albums-user.component';

describe('AlbumsUserComponent', () => {
  let component: AlbumsUserComponent;
  let fixture: ComponentFixture<AlbumsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
