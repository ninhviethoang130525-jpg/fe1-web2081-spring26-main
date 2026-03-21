import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-story.html',
  standalone: true,
  styleUrls: ['./add-story.css'],
})
export class AddStory {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      views: ['', [Validators.required, Validators.min(0)]],
    });

    // Realtime console log mỗi khi form thay đổi
    this.addForm.valueChanges.subscribe(value => {
      console.log('Realtime add-story value:', value);
    });
  }

  // Getters for form controls
  get title() {
    return this.addForm.get('title');
  }

  get author() {
    return this.addForm.get('author');
  }

  get views() {
    return this.addForm.get('views');
  }

  submitForm() {
  if (this.addForm.valid) {
    const data = this.addForm.value;

    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        alert('Truyện tranh đã được thêm thành công!');
        this.addForm.reset();
      },
      error: () => {
        alert('Thêm thất bại!');
      }
    });
  }
}
}