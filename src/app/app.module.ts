import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from '../material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { PlanaprendizajeComponent } from './planaprendizaje/planaprendizaje.component';
import { FormComponent } from './planaprendizaje/form.component';

const routes: Routes=[
  {path:'',redirectTo: 'clientes', pathMatch: 'full'},
  {path:'clientes',component: InterfazComponent},
  {path:'planAprendizaje',component: PlanaprendizajeComponent},
  {path:'planaprendizaje/form',component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InterfazComponent,
    PlanaprendizajeComponent,
    FormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatStepperModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
