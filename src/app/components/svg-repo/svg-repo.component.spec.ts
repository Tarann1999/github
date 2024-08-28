import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRepoComponent } from './svg-repo.component';

describe('SvgRepoComponent', () => {
  let component: SvgRepoComponent;
  let fixture: ComponentFixture<SvgRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
