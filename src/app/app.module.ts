import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { 
  MatButtonModule, 
  MatSelectModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDividerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTableModule, 
  MatTabsModule,
  MatCardModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatFormFieldModule,
  MatIconModule, 
  MatSidenavModule, 
  MatListModule } from '@angular/material';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ReverseStringPipe } from './custom-pipe/reverse-string.pipe';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { GooglePlacesDirective } from './custom-directive/google-places.directive';
import { environment } from '../environments/environment'; 


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    NewsComponent,
    CustomPipeComponent,
    ReverseStringPipe,
    CustomDirectiveComponent,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatNativeDateModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
 