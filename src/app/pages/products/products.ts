import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products {
  addProductForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
    });
  }

  // Getters for form controls
  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }

  get category() {
    return this.addProductForm.get('category');
  }

  submitForm() {
    if (this.addProductForm.valid) {
      console.log('Product Form:', this.addProductForm.value);
      alert('Sản phẩm đã được thêm thành công!');
      this.addProductForm.reset();
    }
  }
}