import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-player-progressbar',
	templateUrl: './player-progressbar.component.html',
	styleUrls: ['./player-progressbar.component.scss']
})
export class PlayerProgressbarComponent implements OnInit, OnChanges {
	@Input() progress: number;
	@Input() duration: string;
	@Input() currentTime: string;
	@Output() progressChange = new EventEmitter<number>();

	constructor() { }

	ngOnChanges(changes: SimpleChanges) {
		const val = changes?.['duration']?.currentValue;
		if (val) {
		}
	}
	ngOnInit() {
	}

	onClick(event: MouseEvent) {
		const val = event.x / document.body.clientWidth * 100;
		this.progressChange.emit(val);
	}





}
