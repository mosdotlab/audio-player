import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { material } from './shared/material.modules';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		...material
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
