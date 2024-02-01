import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelayerComponent } from './servicelayer.component';

describe('ServicelayerComponent', () => {
  let component: ServicelayerComponent;
  let fixture: ComponentFixture<ServicelayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicelayerComponent]
    });
    fixture = TestBed.createComponent(ServicelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
