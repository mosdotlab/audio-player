import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-audio-list',
	templateUrl: './audio-list.component.html',
	styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {
	public audios: any;
	public song:any;
	public audio:any;
	constructor(private _api: ApiService) { }

	ngOnInit(){
		// this._api.get().subscribe(result => {
		// 	this.audios = result;
			
			
		// 	this.song=this.audios[0].song;
			
		// 	this.audio = new Audio();
		// 	this.audio.src=this.song;
		// this.audio.load();
		// 	// setTimeout(() => {
		// 	// 	audio.play();
		// 	// }, 8000);

		// });
	}

	play(){
		//const audio = new Audio();
		//audio.load();
			
		this.audio.play();
		//audio.src = 'api/data/' + this.audios[0].song;
	}

}
