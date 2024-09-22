import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, NgFor],  
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comments: any[] = [
    {
      name: "Gisell López",
      alias: "@gizlop",
      comment: "Angular Framework continues to evolve"
    },
    {
      name: "Jhon Papa",
      alias: "@jpapa",
      comment: "Thank you for watching this tutorial"
    }
  ];

  name: string = '';
  comment: string = '';

  constructor() {}

  ngOnInit(): void {}

  addcomment() {
    if (this.name && this.comment) {
      let commentAux = {
        name: this.name,
        alias: `@${ this.name }`,
        comment: this.comment
      };
  
      this.comments.push(commentAux);
      // Limpiar los inputs después de agregar el comentario
      this.name = '';
      this.comment = '';
    } else {
      console.log('Name or comment is empty');
    }
  }

  delete(indice: any){
    this.comments.splice(indice,1);
  }
}
