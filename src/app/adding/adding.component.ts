import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrl: './adding.component.css'
})
export class AddingComponent {
  title: any;
  image: any;
  content:any;
  blogs:any;

  constructor(private blogService: BlogService) { }

  onSubmit() {
    const newBlog = { title: this.title,image: this.image,content:this.content };
    this.blogService.registerBlogs(newBlog).subscribe(
      () => {
        console.log('Blog added successfully');
        // You can redirect or perform any other action upon successful addition
      },
      (      error: any) => {
        console.error('Error adding blog:', error);
      }
    );
  }

}
