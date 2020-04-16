import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }
  column: string;
  headers = ["ID", "Cliente", "Matriz"];

  rows = [
    {
      "ID" : "1",
      "Cliente" : "HSBC",
      "Matriz" : "GO123",

    },
    {
      "ID" : "2",
      "Cliente" : "Banco Galicia",
      "Matriz" : "UV321",
    },
    {
      "ID" : "3",
      "Cliente" : "Banco Valve",
      "Matriz" : "HL3",
    },
    {
      "ID" : "4",
      "Cliente" : "Banco Santander",
      "Matriz" : "GO123",

    },
    {
      "ID" : "5",
      "Cliente" : "Banco Provincia",
      "Matriz" : "UV321",
    },
    {
      "ID" : "6",
      "Cliente" : "Banco FF",
      "Matriz" : "FFVII",
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
    doc.save('Tabla de Usuarios');

  }

  ngOnInit(): void {

  }

}
