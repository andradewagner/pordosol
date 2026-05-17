import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadinhoComponent } from './mercadinho.component';

describe('Mercadinho', () => {
  let component: MercadinhoComponent;
  let fixture: ComponentFixture<MercadinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercadinhoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MercadinhoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
