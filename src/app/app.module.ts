import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';

//Routes
import { HomeRoute } from './routes/home/home.route';

//Components
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterMenuComponent } from './components/footer/footer.component';
import { NavFooterComponent } from './components/navfooter/navfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    //components
    FooterMenuComponent,
    NavFooterComponent,
    NavMenuComponent,
    //routes
    HomeRoute
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    Ng2PageScrollModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
