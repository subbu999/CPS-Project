import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MediaPlatesComponent } from './products/media-plates/media-plates.component';
import { BiologicalIndicatorsComponent } from './products/biological-indicators/biological-indicators.component';
import { FiltersFunnelsComponent } from './products/filters-funnels/filters-funnels.component';
import { GlasswareComponent } from './products/glassware/glassware.component';
import { FoggerDisinfectantComponent } from './products/fogger-disinfectant/fogger-disinfectant.component';
import { DepyrogenatedTipsTubesComponent } from './products/depyrogenated-tips-tubes/depyrogenated-tips-tubes.component';
import { LabEquipmentComponent } from './products/lab-equipment/lab-equipment.component';
import { StainlessSteelComponent } from './products/stainless-steel/stainless-steel.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { LiquidHandlingInstrumentsComponent } from './products/liquid-handling-instruments/liquid-handling-instruments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    MediaPlatesComponent,
    BiologicalIndicatorsComponent,
    FiltersFunnelsComponent,
    GlasswareComponent,
    FoggerDisinfectantComponent,
    DepyrogenatedTipsTubesComponent,
    LabEquipmentComponent,
    StainlessSteelComponent,
    OurservicesComponent,
    LiquidHandlingInstrumentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
