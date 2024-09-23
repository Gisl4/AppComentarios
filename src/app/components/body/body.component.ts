import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common'; 
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, NgFor],  
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comments: any;

  name: string = '';
  comment: string = '';

  constructor(private _comment: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  addComment() {
    console.log(this.name);
    console.log(this.comment);

    let commentAux = {
      name: this.name,
      comment: this.comment
    };

    this._comment.save(commentAux)
      .subscribe((data: any) => {
        console.log("comentario guardado");
        this.getComments();
      });
  }

  delete(indice: any) {
    this._comment.delete(indice)
      .subscribe((data: any) => {
        console.log("deleted comment");
        this.getComments();
      });
  }

  getComments() {
    this._comment.get()
      .subscribe((data: any) => {
        this.comments = data;
        console.log(this.comments);
      });
  }
}
