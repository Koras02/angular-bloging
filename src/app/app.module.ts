import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, FeatureModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
