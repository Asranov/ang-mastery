import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessangersComponent } from './messangers.component';

describe('MessangersComponent', () => {
  let component: MessangersComponent;
  let fixture: ComponentFixture<MessangersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessangersComponent]
    });
    fixture = TestBed.createComponent(MessangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
