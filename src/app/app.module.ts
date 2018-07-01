import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms' ;
import { ReactiveFormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { BlogcomponentComponent } from './blogcomponent/blogcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    MaincomponentComponent,
    AboutcomponentComponent,
    BlogcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      
      {

      path : 'aboutcomponent',
      component : AboutcomponentComponent  
    
      },

      {

      path : 'maincomponent',
      component : MaincomponentComponent  
    
      },

      {

      path : 'aboutcomponent',
      component : AboutcomponentComponent  
    
      },
      {

      path : 'blogcomponent',
      component : BlogcomponentComponent  
    
      }

    ])

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
