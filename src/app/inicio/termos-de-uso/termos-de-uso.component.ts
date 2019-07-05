import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-termos-de-uso',
  templateUrl: './termos-de-uso.component.html',
  styleUrls: ['./termos-de-uso.component.scss']
})
export class TermosDeUsoComponent implements OnInit {

  accept: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TermosDeUsoComponent>) {}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
