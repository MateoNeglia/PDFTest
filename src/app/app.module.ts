import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TablaComponent } from './tabla/tabla.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';


PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
