import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule],
    templateUrl: './register.html',
    styleUrls: ['./register.css'],
})
export class Register {
    registerForm: FormGroup;

    loading = false;
    error = "";
    success = "";
     
    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
        private router: Router,
    ){
        this.registerForm = this.fb.group({
            name: "",
            email:"",
            password: "",   
        });

    }

    submitForm(){
        if(!this.registerForm.valid){
            this.registerForm.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.error = "";
        this.success = "";

        const data = this.registerForm.value;
        this.http.post("http://localhost:3000/users", data).subscribe({
            next: () => {
                this.loading = false;
                this.success = "Đăng ký thành công";
                this.router.navigate(['/login']);
            },
            error: (err) => {
                this.loading = false;
                this.error = "Đăng ký thất bại";

        
    },

});
    }
}