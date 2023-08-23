import {enableProdMode, importProvidersFrom} from '@angular/core';
// @ts-ignore
import { bootstrapApplication } from '@angular/platform-browser-dynamic';
import {provideRouter, RouteReuseStrategy} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {BrowserModule} from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicModule.forRoot(),
    BrowserModule,
    routes
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
  ],
});
