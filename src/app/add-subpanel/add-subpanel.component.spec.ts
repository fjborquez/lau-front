import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubpanelComponent } from './add-subpanel.component';

describe('AddSubpanelComponent', () => {
  let component: AddSubpanelComponent;
  let fixture: ComponentFixture<AddSubpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
