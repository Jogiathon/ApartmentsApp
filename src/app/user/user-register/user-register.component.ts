import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, { validators: this.passwordMatchingValidator});
  }

  private passwordMatchingValidator(fg: FormGroup)  {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

}
