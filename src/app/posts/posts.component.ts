import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  post = {
    title: '',
    body: ''
  }

  editable = false;

  myPosts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe((response: any[]) => {
      this.myPosts = response;
      console.log(response);
    });
  }

  deletePost(id, index) {
    this.postService.destroy(id).subscribe(response => {
        this.myPosts = this.myPosts.filter(post => post.id != id);
    },
    err => alert(err.message));
  }

  createPost() {
    this.postService.create(this.post).subscribe(res => {
      this.myPosts = [res, ...this.myPosts];
      //this.myPosts.unshift(res)
      this.initPost();
    })
  }

  editPost(post) {
    this.editable = true;
    this.post = post;
  }

  updatePost() {
    this.postService.update(this.post).subscribe(res => {
      this.editable = false;
      this.initPost();
    })
  }

  initPost() {
    this.post = {
      title: '',
      body: ''
    }
  }

}
