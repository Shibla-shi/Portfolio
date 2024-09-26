import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HighlightDirective } from './highlight.directive';
import { TooltipDirective } from './tooltip.directive';
import { AutoFocusDirective } from './autofocus.directive';
import { DynamicClassDirective } from './dynamic-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminPageComponent,
    LoginComponent,
    HighlightDirective,
    TooltipDirective,
    AutoFocusDirective,
    DynamicClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is here
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
