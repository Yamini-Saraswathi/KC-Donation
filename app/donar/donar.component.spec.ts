import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarComponent } from './donar.component';

describe('GlobadminComponent', () => {
  let component: DonarComponent;
  let fixture: ComponentFixture<DonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
