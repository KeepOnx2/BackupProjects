/**
* Angular Modules
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	imports: [BrowserModule],
	providers: [Logger],
	declorations: [AppComponent],
	exports: [AppComponent],
	bootsrap: [AppComponent]
})

export class AppModule { }

/* Launch an application by bootstrapping its root module
* I'm likely to bootstrap the AppModule in a main.ts file */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '.app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/* In JavaScript each file is a module and all objects defined in that file belong to that module.
*/
import {NgModule} from '@angular/core';
import {AppComponent} from './app-component';

export class AppModule { }

/**
* Angular Libraries
*/

// Import 'Component' decorator
import {Component} from '@angular/core';

// Import NgModules from Angular libraries using JavaScript import statements
import {BrowserModule} from '@angular/platform-browser';

// In the example of the simple root module above, the app module needs material from within that 'BrowserModule'.
// To access this material, add it to the '@NgModule' metadata 'imports'
imports:  [BrowserModule],
// This uses both Angular and JavaScript module systems together

/**
* Components
*/

/* A component controls a patch of screen called a 'view'
1. The app root with the navigation links
2. The list of heroes
3. The hero editor

* You define a components app logic inside a class. 
** The class interacts with the view through an API of properties and methods.
*/
export class HeroListComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private service: HeroService) { }

	ngOnInit() {
		this.service = this.service.getHeroes();
	}

	selectedHero(hero: Hero) {
		this.selectedHero = hero;
	}
}

/* Angular creates, updates, and destroys components as the user moves through the app.
My app can take action at each moment in this lifecycle through optional 'lifecycle hooks' like 'ngOnInit()' declared above.
*/

/********
* Templates
*********/

// I can define a component's view with its companion template.
// !A template is a form of HTML that tells Angular how to render the component!
<h2>Hero List</h2>

<p><i>Pick a hero from the list</i></p>
<ul>
	<li *ngFor="let hero of heroes" (click)="selectHero(hero)">
		{{hero.name}}
	</li>
</ul>

<hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
// The non-HTML elements are from Angular's 'template syntax'

/***************
* Metadata
****************/
// Metadata tells Angular how to process a class
