import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsToolbarComponent } from './contacts-toolbar.component';

describe('ContactsToolbarComponent', () => {
  let component: ContactsToolbarComponent;
  let fixture: ComponentFixture<ContactsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
