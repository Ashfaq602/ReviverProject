import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css'
})
export class BloglistComponent  {
  constructor(private blogService:BlogService){}
  blogs:any;
  
  ngOnInit(): void {
    this.blogService.getALLBlogs().subscribe((data: any) => {
      console.log(data);
      this.blogs = data;
      // console.log(this.medicines);
    });
}
deleteBlog(blogId: number) {
  this.blogService.deleteBlog(blogId).subscribe(
    (response: any) => {
      console.log('Blog deleted successfully');
      // You might want to update your blog list after deletion
    },
    (error: any) => {
      console.error('Error deleting blog:', error);
    }
  );
}

}
