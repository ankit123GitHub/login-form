import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
submitdata() {
throw new Error('Method not implemented.');
}
  title: any;
  showStorage: any;
  loginForm: FormGroup | undefined;
  fb: any;
  form: any;

  constructor() {
    this.ngOnInit();
}

ngOnInit() {
    this.loginForm = this.fb.onSubmit({
        email: ['', [Validators.required, Validators.email],
        password: ['', [
            Validators.required,
            Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
        ]]
    });
}
  // constructor() {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // }


  onSubmit()
  users=['naman','aman','om'];
  userdetails =[
    {name : 'naman' , emailid :'naman@test'  },
    {name : 'aman' , emailid :'aman@test'  },
    {name : 'om' , emailid :'om@test'  },
  ]
  {
  //   if (this.loginForm.valid) {
  //     console.log(this._form());
  //   }
  // }
  // _form() {
  //   return this.loginForm.value;
  }

  submitdata() {
    var value = localStorage.setItem(
      'submitdata',
      JSON.stringify(this.loginForm.value)
    );
    // this.showStorage = localStorage.getItem('submitdata');
    // console.warn('Sign in Successfully work');
  }
}
