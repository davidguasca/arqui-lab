import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { BrandComponent } from './components/brand/brand.component';
import { OwnerComponent } from './components/owner/owner.component';

export const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'owners', component: OwnerComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }
];

export const appConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes))
  ]
};
