import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-player-widget',
	templateUrl: './player-widget.component.html',
	styleUrls: ['./player-widget.component.scss']
})
export class PlayerWidgetComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	public play(flag:boolean){
	}

	public pause(flag:boolean){
	}

	public stop(flag:boolean){
	}

	public rewind(flag:boolean){
	}

	public forward(flag:boolean){
	}

	public shuffle(flag:boolean){
	}

	public navigate(flag:boolean){
	}

}
