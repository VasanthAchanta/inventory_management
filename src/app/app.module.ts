import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';

const appRoutes: Routes = [
  { path: 'inventory-list', component: InventoryListComponent },
  { path: '', redirectTo: '/inventory-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    InventoryFormComponent,
    InventoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)  // Import RouterModule and configure routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }