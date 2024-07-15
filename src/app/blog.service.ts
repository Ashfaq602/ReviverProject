import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  

  constructor(private client:HttpClient) { }
  getALLBlogs():any{
    return this.client.get('http://localhost:8087/getALLBlogs');
  }
  getBlogById(id:number){
    return this.client.get('http://localhost:8087/getBlogById/{id}');
  }
  getBlogByTitle(title:String){
    return this.client.get('http://localhost:8087/getBlogByTitle/{title}');
  }
  updateBlogs(blog:any):any{
    return this.client.put('http://localhost:8087/updateBlogs',blog);
  }
  deleteBlog(id:number){
    return this.client.delete('http://localhost:8087/deleteBlog/{id}');
  }
  registerBlogs(blog:any){
    return this.client.put('http://localhost:8087/registerBlogs',blog );
  }
}
