import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpanComponent } from './arpan.component';

describe('ArpanComponent', () => {
  let component: ArpanComponent;
  let fixture: ComponentFixture<ArpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArpanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

