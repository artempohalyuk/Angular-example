import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeFormComponent } from './authorize-form.component';

describe('AuthorizeFormComponent', () => {
  let component: AuthorizeFormComponent;
  let fixture: ComponentFixture<AuthorizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
