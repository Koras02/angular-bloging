import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'feature', component: FeatureComponent },
  { path: 'example', component: ExampleComponent },
  { path: '', redirectTo: '/feature', pathMatch: 'full' },
  { path: '**', redirectTo: '/feature' },
];
