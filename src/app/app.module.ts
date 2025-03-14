import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { material } from './shared-modules/material.modules';
import { FavoritesPageComponent } from './components/page/favorites-page/favorites-page.component';
import { InfoPageComponent } from './components/page/info-page/info-page.component';
import { SearchbarComponent } from './components/shared/searchbar/searchbar.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { PlayerPageComponent } from './components/page/player-page/player-page.component';
import { PlayerActionsComponent } from './components/player/player-actions/player-actions.component';
import { PlayerProgressbarComponent } from './components/player/player-progressbar/player-progressbar.component';
import { PlayerWidgetComponent } from './components/player/player-widget/player-widget.component';
import { AudioListComponent } from './components/audio-list/audio-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
	declarations: [
		AppComponent,
		PlayerPageComponent,
		PlayerActionsComponent,
		PlayerProgressbarComponent,
		PlayerWidgetComponent,
		AudioListComponent,
		FavoritesComponent,
		LoaderComponent,
		SearchbarComponent,
		InfoPageComponent,
		FavoritesPageComponent,
		HighlightPipe,
		ToolbarComponent
	 ],
	imports: [		
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		HttpClientModule,
		...material
	],
	exports: [HighlightPipe],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
