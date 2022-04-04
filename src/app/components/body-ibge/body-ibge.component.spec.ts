import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIbgeComponent } from './body-ibge.component';

describe('BodyIbgeComponent', () => {
  let component: BodyIbgeComponent;
  let fixture: ComponentFixture<BodyIbgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyIbgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIbgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
