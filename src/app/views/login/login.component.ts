import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,private router: Router){}

  ngOnInit():  void {
      this.loginForm = new FormGroup({
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
      })
    }
  
    get formControl() {
      return this.loginForm.controls;
    }

  onSubmit()
  {
    if(this.loginForm.invalid)
    {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((bodyresponse: any) => {
      localStorage.setItem('token',bodyresponse.token);
      this.router.navigateByUrl('/dashboard');
     });
  }

}