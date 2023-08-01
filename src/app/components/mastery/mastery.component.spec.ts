import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryComponent } from './mastery.component';

describe('MasteryComponent', () => {
  let component: MasteryComponent;
  let fixture: ComponentFixture<MasteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasteryComponent]
    });
    fixture = TestBed.createComponent(MasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
