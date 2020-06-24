import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ViewChildFormComponent } from './view-child-form/view-child-form.component';
import { WithFormControlComponent } from './with-form-control/with-form-control.component';
import { WithFormBuilderComponent } from './with-form-builder/with-form-builder.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ViewChildFormComponent,
    WithFormControlComponent,
    WithFormBuilderComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
