import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './components/page/player-page/player-page.component';
import { InfoPageComponent } from './components/page/info-page/info-page.component';
import { FavoritesPageComponent } from './components/page/favorites-page/favorites-page.component';

const routes: Routes = [
	{
		path: '',
		component: PlayerPageComponent
	},
	{
		path: 'info',
		component: InfoPageComponent
	},
	{
		path: 'favorites',
		component: FavoritesPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
