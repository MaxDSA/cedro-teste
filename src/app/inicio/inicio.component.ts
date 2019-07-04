import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  deny() {
      const dialogRef = this.dialog.open(TermosDeUsoComponent, {
        width: '400px',
          
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}
