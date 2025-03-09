export interface IAudio {
	id: number,
	artist: IArtist,
	song: ISong
}

export interface IArtist {
	name: string,
	img: string,
}

export interface ISong {
	url: string,
	title: string,
	fileName: string,
}

export interface IAudioElement {
	id: number,
	playIcon?: string,
	favoriteIcon?: string,
	downloadIcon?: string,
	artistImg?: string,
	songTitle: string,
	fileName: string
}