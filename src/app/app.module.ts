import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Ajouter ReactiveFormsModule


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,  
      ReactiveFormsModule
     ],
  providers: [provideRouter([]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideImgixLoader('https://yourdomain.imgix.net'),{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
