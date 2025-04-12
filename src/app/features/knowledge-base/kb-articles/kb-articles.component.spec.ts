import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbArticlesComponent } from './kb-articles.component';

describe('KbArticlesComponent', () => {
  let component: KbArticlesComponent;
  let fixture: ComponentFixture<KbArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
