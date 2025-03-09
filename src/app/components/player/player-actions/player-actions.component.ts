import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-player-actions',
	templateUrl: './player-actions.component.html',
	styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent implements OnInit {
	@Output() playChange = new EventEmitter<boolean>();
	@Output() pauseChange = new EventEmitter<boolean>();
	@Output() stopChange = new EventEmitter<boolean>();
	@Output() rewindChange = new EventEmitter<boolean>();
	@Output() forwardChange = new EventEmitter<boolean>();
	@Output() shuffleChange = new EventEmitter<boolean>();
	@Output() navigateChange = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit(): void {
	}

	public play() {
		this.playChange.emit(true);
	}

	public pause() {
		this.pauseChange.emit(true);
	}

	public stop() {
		this.stopChange.emit(true);
	}

	public rewind() {
		this.rewindChange.emit(true);
	}

	public forward() {
		this.forwardChange.emit(true);
	}

	public shuffle() {
		this.shuffleChange.emit(true);
	}

	public navigate() {
		this.navigateChange.emit(true);
	}

}
