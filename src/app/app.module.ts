import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  // Módulo de autenticación
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';  // Importar el archivo de entorno
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddTripComponent } from './add-trip/add-trip.component';




@NgModule({
  declarations: [AppComponent, AddTripComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializar Firebase
    AngularFireAuthModule  // Importar el módulo de autenticación de Firebase
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
