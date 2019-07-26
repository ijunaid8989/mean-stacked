import { Component, OnInit } from "@angular/core";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: "First Post", content: "This is first post"},
  //   {title: "Second Post", content: "This is Second post"},
  //   {title: "Third Post", content: "This is Third post"}
  // ]
  posts: Post[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
