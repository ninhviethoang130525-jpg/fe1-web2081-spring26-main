import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-edit-page',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './edit-page.html',
    styleUrl: './edit-page.css',
})
export class EditPage implements OnInit {

    id: any;
    editForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private fb: FormBuilder,
        private router: Router
        ){
        this.id = this.route.snapshot.paramMap.get('id');

        this.editForm = this.fb.group({
            title: [''],
            quantity: [0],
            coverImage: [''],
            genre: [''] 
        });
        
    } 

    ngOnInit(){
        this.http.get(`http://localhost:3000/books/${this.id}`).subscribe({
            next: (data: any) => {
                console.log(data);
                this.editForm?.patchValue(data);
            },
            error: (err) => (console.error("Lỗi lấy dữ liệu",err)),
        });
    }

    submitForm(){
        if(confirm("bạn có chắc chắn muốn cập nhập không")){
            if(this.editForm){
                this.http.put(`http://localhost:3000/books/${this.id}`, this.editForm.value).subscribe({
                    next: () => {
                        alert("cập nhập thành công");
                        this.router.navigate(['/list'])
                    },
                    error: (err) => console.log("lỗi cập nhập dữ liệu", err),
                });
            }
        }
    }

    goBack(){
        this.router.navigate(['/list']);
    };

}