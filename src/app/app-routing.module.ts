import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MediaPlatesComponent } from './products/media-plates/media-plates.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BiologicalIndicatorsComponent } from './products/biological-indicators/biological-indicators.component';
import { FiltersFunnelsComponent } from './products/filters-funnels/filters-funnels.component';
import { GlasswareComponent } from './products/glassware/glassware.component';
import { FoggerDisinfectantComponent } from './products/fogger-disinfectant/fogger-disinfectant.component';
import { DepyrogenatedTipsTubesComponent } from './products/depyrogenated-tips-tubes/depyrogenated-tips-tubes.component';
import { LabEquipmentComponent } from './products/lab-equipment/lab-equipment.component';
import { StainlessSteelComponent } from './products/stainless-steel/stainless-steel.component';
import { LiquidHandlingInstrumentsComponent } from './products/liquid-handling-instruments/liquid-handling-instruments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'products', children: [
      { path: 'media-plates', component: MediaPlatesComponent },
      { path: 'biological-indicators', component: BiologicalIndicatorsComponent },
      { path: 'filters-funnels', component: FiltersFunnelsComponent },
      { path: 'glassware', component: GlasswareComponent },
      { path: 'fogger-disinfectant', component: FoggerDisinfectantComponent },
      { path: 'depyrogenated-tips-tubes', component: DepyrogenatedTipsTubesComponent },
      { path: 'lab-equipment', component: LabEquipmentComponent },
      { path: 'stainless-steel', component: StainlessSteelComponent },
      { path: 'liquid-handling-instruments', component: LiquidHandlingInstrumentsComponent },

    ]
  },
  { path: 'our-services', component: OurservicesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
