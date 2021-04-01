import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user: any = {};
  userSubmitted!: boolean;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    // this.registrationForm = this.formBuilder.group({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, { validators: this.passwordMatchingValidator});

    // this.registrationForm.controls['userName'].setValue('Default Value');
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator})
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
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

}
