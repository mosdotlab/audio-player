import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWidgetComponent } from './player-widget.component';

describe('PlayerWidgetComponent', () => {
	let component: PlayerWidgetComponent;
	let fixture: ComponentFixture<PlayerWidgetComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PlayerWidgetComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PlayerWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
