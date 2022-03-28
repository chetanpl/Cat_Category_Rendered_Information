import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICatLayoutComponent } from './uicat-layout.component';

describe('UICatLayoutComponent', () => {
  let component: UICatLayoutComponent;
  let fixture: ComponentFixture<UICatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UICatLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UICatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
