import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  name: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient){
    this.name = this.fb.group({
      Title: '',
      Quantity: 0,
      CoverImage:  '',
      Genre: '',
    });
  }

  submitForm = () => {
    console.log(this.name.value);
    this.http.post('http://localhost:3000/books', this.name.value).subscribe({
      next: ()=> {
        alert("thêm mới thành công");
      }
    });
  };
    
}
