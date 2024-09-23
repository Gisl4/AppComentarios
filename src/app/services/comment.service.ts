import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: any = 'http://localhost:5000/api/comments/';

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.url);
  }

 delete(id: number) {
    return this.http.delete(`http://localhost:5000/api/comments/${id}`);
  }

  save( comment: any) {
    return this.http.post(this.url, comment);
  }
}

