import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
interface name{}
@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
  name: any[] = [];

  constructor(private http: HttpClient, private router: Router){ }

  trackById(index: number, item: any) {
    return item.id;
  }

  ngOnInit(){
    this.http.get('http://localhost:3000/books').subscribe({
      next: (data: any) => {
        console.log(data);
        this.name = data;
      }
    });
  }

  deleteGroup(id: number){
    if(confirm ("bạn có chắc chắn muốn xóa không") )
    this.http.delete("http://localhost:3000/books/"+ id).subscribe({
    next: (data: any ) => {
      console.log(data);
      this.name = this.name.filter((item)=> item. id !== id );
    }
  });
  }

  editBook(id: number){
    this.router.navigate(['/edit', id]);
  }

  }

