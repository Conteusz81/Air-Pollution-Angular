import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ParametersListComponent } from './parameters-list/parameters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    ParametersListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
