import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestacaoComponent } from './prestacao.component';

describe('Prestacao', () => {
  let component: PrestacaoComponent;
  let fixture: ComponentFixture<PrestacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrestacaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
