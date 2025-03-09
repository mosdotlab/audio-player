import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTableComponent } from './audio-table.component';

describe('AudioTableComponent', () => {
  let component: AudioTableComponent;
  let fixture: ComponentFixture<AudioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
