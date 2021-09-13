import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LformComponent } from './lform.component';

describe('LformComponent', () => {
  let component: LformComponent;
  let fixture: ComponentFixture<LformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
