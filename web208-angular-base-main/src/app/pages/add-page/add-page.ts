import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  name: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){
    this.name = this.fb.group({
      title: '',
      quantity: 0,
      coverImage:  '',
      genre: '',
    });
  }

  submitForm = () => {
    console.log(this.name.value);
    this.http.post('http://localhost:3000/books', this.name.value).subscribe({
      next: ()=> {
        this.router.navigate(['/list']);
        alert("thêm mới thành công");
      }
    });
  };
    
}
