import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        firstName : this.form.value.fname,
        lastName : this.form.value.lname,
        email : this.form.value.email,
        password : this.form.value.password,
        service : "advance"
      }

      console.log(reqObj)

      this.userService.registerService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}

      


