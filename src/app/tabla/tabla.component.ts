import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PdfMakeWrapper, Table, Img } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }
  column: string;
  headers = ['ID', 'Cliente', 'Matriz'];
  options = '';
  rows = [
    {
      'ID' : '1',
      'Cliente' : 'HSBC',
      'Matriz' : 'GO123',

    },
    {
      'ID' : '2',
      'Cliente' : 'Banco Galicia',
      'Matriz' : 'UV321',
    },
    {
      'ID' : '3',
      'Cliente' : 'Banco Valve',
      'Matriz' : 'HL3',
    },
    {
      'ID' : '4',
      'Cliente' : 'Banco Santander',
      'Matriz' : 'GO123',

    },
    {
      'ID' : '5',
      'Cliente' : 'Banco Provincia',
      'Matriz' : 'UV321',
    },
    {
      'ID' : '6',
      'Cliente' : 'Banco FF',
      'Matriz' : 'FFVII',
    }
  ];


  // cliente: ['cliente1', 'cliente2', 'cliente3'];
  // id: ['1', '2', '3'];
  // matriz: ['GO123', 'UV321', 'HL3'];

  imprimirLista(){


    // se crea una nueva constante del elemento jspdf
    const doc = new jsPDF();
    // se crean la propiadad from HTML y save
    // fromHTML requiere recibir tres parametros: el elemento que vamos a convertir a pdf, so posicion en el eje x y su posicion en el eje Y
    doc.fromHTML(document.getElementById('frm1'), 10 , 10);
    // doc.window.open('new.pdf', '_blank', this.options);
    const blob = new Blob([doc],  { type: jsPDF.toString() });
    const url = window.URL.createObjectURL(blob);
    doc.save();

  }
  generarPdf(){

    PdfMakeWrapper.setFonts(pdfFonts);

    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Table([
        ['ID', 'CLiente', 'Matriz'],
        ['1', 'Banco Provincia', 'GO123'],
        ['2', 'Banco ICBC', 'GO123'],
        ['3', 'Banco Frances', 'GO123'],
        ['4', 'Banco Galicia', 'GO123']
      ]).end
      );

    // esto en conjunto genera un blob en una pestaña nueva con el pdf
    pdf.create().open();

  }

  generateImage(){

    html2canvas(document.getElementById('frm1')).then(canvas => {
      document.body.appendChild(canvas);
  })

  }

  onPrintInvoice(){
      window.print();

  }


  ngOnInit(): void {}

}
