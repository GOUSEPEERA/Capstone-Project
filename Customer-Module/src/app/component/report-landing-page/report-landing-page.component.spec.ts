import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLandingPageComponent } from './report-landing-page.component';

describe('ReportLandingPageComponent', () => {
  let component: ReportLandingPageComponent;
  let fixture: ComponentFixture<ReportLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
