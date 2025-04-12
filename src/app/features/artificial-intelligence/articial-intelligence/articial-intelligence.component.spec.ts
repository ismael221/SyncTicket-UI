import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticialIntelligenceComponent } from './articial-intelligence.component';

describe('ArticialIntelligenceComponent', () => {
  let component: ArticialIntelligenceComponent;
  let fixture: ComponentFixture<ArticialIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticialIntelligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticialIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
