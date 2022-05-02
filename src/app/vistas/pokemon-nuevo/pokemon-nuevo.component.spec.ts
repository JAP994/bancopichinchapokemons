import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNuevoComponent } from './pokemon-nuevo.component';

describe('PokemonNuevoComponent', () => {
  let component: PokemonNuevoComponent;
  let fixture: ComponentFixture<PokemonNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
