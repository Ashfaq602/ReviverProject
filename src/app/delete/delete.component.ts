import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private blogService: BlogService) {}

  deleteBlog(blogId: number) {
    this.blogService.deleteBlog(blogId).subscribe(
      (response: any) => {
        console.log('Blog deleted successfully');
        
      },
      (error: any) => {
        console.error('Error deleting blog:', error);
      }
    );
  }

}
