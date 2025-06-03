import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistcomponentComponent } from './studentlistcomponent.component';

describe('StudentlistcomponentComponent', () => {
  let component: StudentlistcomponentComponent;
  let fixture: ComponentFixture<StudentlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentlistcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
