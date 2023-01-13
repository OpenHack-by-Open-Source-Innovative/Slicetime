import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './core/components/auth/auth.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, AuthComponent],
  imports: [BrowserModule, MatSlideToggleModule, MatCardModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
