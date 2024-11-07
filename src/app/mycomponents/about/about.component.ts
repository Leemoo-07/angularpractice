import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  registerForm: FormGroup; 

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      username:[ '',Validators.required],
      password: ['',Validators.required,]
    });
  }

  toggleNavbar: any;

  onSubmit(): void {
    console.log(
      'submitted',
       this.registerForm.value
      );
  }
}
