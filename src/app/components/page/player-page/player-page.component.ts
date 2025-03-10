import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-player-page',
	templateUrl: './player-page.component.html',
	styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
	public songUrl: string;

	constructor() { }

	ngOnInit() { }

	public play(songUrl: string) {
		this.songUrl = songUrl;
	}

}
