import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProgressbarComponent } from './player-progressbar.component';

describe('PlayerProgressbarComponent', () => {
	let component: PlayerProgressbarComponent;
	let fixture: ComponentFixture<PlayerProgressbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PlayerProgressbarComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PlayerProgressbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
