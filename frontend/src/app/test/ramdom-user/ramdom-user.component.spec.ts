import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamdomUserComponent } from './ramdom-user.component';

describe('RamdomUserComponent', () => {
  let component: RamdomUserComponent;
  let fixture: ComponentFixture<RamdomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamdomUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamdomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
