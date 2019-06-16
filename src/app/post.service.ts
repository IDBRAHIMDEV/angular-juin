import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

  destroy(id) {
    return this.http.delete('http://jsonplaceholder.typicode.com/posts/' + id);
  }

  create(post) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts', post);
  }

  update(post) {
    return this.http.put(`http://jsonplaceholder.typicode.com/posts/${post.id}`, post)
  }
}
