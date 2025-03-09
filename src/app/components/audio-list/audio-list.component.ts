import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IAudio, IAudioElement } from 'src/app/models/audio.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-audio-list',
	templateUrl: './audio-list.component.html',
	styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {
	private sort: MatSort;

	@ViewChild(MatSort) set matSort(ms: MatSort) {
		this.sort = ms;
		this.dataSource.sort = this.sort;
	}

	public displayedColumns = [
		'id',
		'play',
		'favorite',
		'songTitle',
		'fileName',
		'download'
	];
	public dataSource = new MatTableDataSource();
	public message: string;

	public elements: IAudioElement[];
	private audios: IAudio[];

	constructor(
		public _router: Router,
		private _api: ApiService
	) { }

	ngOnInit() {
		this._api.get().subscribe(
			data => {
				this.audios = data;
				this.dataSource.data = this.getTalbeData(this.audios);
				console.log(this.getTalbeData(this.audios));
				if (this.dataSource.data?.length === 0) {
					this.message = 'Not found';
				}
			});
	}

	private getTalbeData(audios: IAudio[]): IAudioElement[] {
		return audios.map(
			audio => {
				const result: IAudioElement = {
					id: audio.id,
					artistImg: audio.artist.img,
					songTitle: audio.song.title,
					fileName: audio.song.fileName
				}
				return result;
			}
		)

	}
}
