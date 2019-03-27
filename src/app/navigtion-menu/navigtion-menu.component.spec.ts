import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigtionMenuComponent } from './navigtion-menu.component';

describe('NavigtionMenuComponent', () => {
  let component: NavigtionMenuComponent;
  let fixture: ComponentFixture<NavigtionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigtionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigtionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
