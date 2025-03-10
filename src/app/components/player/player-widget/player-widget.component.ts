import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-player-widget',
	templateUrl: './player-widget.component.html',
	styleUrls: ['./player-widget.component.scss']
})
export class PlayerWidgetComponent implements OnInit, OnChanges {
	@Input() songUrl: string;

	public progress: number;
	public duration: string;
	private audio: HTMLAudioElement;

	constructor() {
		this.audio = new Audio();
	}

	ngOnChanges(changes: SimpleChanges) {
		const val = changes?.['songUrl']?.currentValue;
		if (val) {
			this.audio.src = this.songUrl;
			this.audio.load();
			this.audio.play();

			this.audio.ontimeupdate = () => {
				this.duration = this.audio.duration.toString();
				this.progress = Math.floor(this.audio.currentTime) / Math.floor(this.audio.duration) * 100;
			};
		}
	}

	ngOnInit() {
	}

	public updateProgress(event: number) {
		this.audio.currentTime = event * this.audio.duration / 100;
	}

	public play(flag: boolean) {
		this.audio.play();
	}

	public pause(flag: boolean) {
		this.audio.pause();

	}

	public stop(flag: boolean) {

	}

	public rewind(flag: boolean) {

	}

	public forward(flag: boolean) {
	}

	public shuffle(flag: boolean) {
	}

	public navigate(flag: boolean) {


	}

}
