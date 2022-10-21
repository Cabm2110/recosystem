import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotoComponent } from './devoto.component';

describe('DevotoComponent', () => {
  let component: DevotoComponent;
  let fixture: ComponentFixture<DevotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
