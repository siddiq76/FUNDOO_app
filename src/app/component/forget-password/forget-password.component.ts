import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
    });
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        email : this.form.value.email
      }

      this.userService.forgotService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })

    }
  }

  ngOnInit(): void {
  }

}
