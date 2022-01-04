import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgupopupComponent } from './cgupopup.component';

describe('CgupopupComponent', () => {
  let component: CgupopupComponent;
  let fixture: ComponentFixture<CgupopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgupopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgupopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
