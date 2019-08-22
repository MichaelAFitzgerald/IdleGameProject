import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectsComponent } from './objects/objects.component';
import { PlayerComponent } from './player/player.component';
import { PageSwapComponent } from './page-swap/page-swap.component';
import { PerksComponent } from './perks/perks.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    PlayerComponent,
    PageSwapComponent,
    PerksComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
