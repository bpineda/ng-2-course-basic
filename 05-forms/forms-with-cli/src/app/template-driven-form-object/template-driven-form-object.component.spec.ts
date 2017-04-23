import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormObjectComponent } from './template-driven-form-object.component';

describe('TemplateDrivenFormObjectComponent', () => {
  let component: TemplateDrivenFormObjectComponent;
  let fixture: ComponentFixture<TemplateDrivenFormObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
