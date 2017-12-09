import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from '../servicios/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  user: any;
  username: any;
  user2: any[] = [];
  password: any;

  constructor(private uf: FormBuilder, private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.userForm = this.uf.group({
      username: ['', Validators.required ],
      password: ['', [ Validators.required, Validators.minLength(10)] ],
    });
    this.onChanges();
  }

  onChanges(): void {
          this.userForm.valueChanges.subscribe(valor => {
            this.username = valor.username;
            this.password = valor.password;
          });
      }

onSubmit() {
        this.user = this.saveUser();
        this.user2 = [];
        this.httpRequestService.httpPost( this.user , 'https://aqua-container.mybluemix.net/users/login' )
           .subscribe(newuser => {
              this.user2.push(newuser);
            })
              this.userForm.reset();
      }

      saveUser() {
        const saveUser = {
          username: this.userForm.get('username').value,
          password: this.userForm.get('password').value
        };
        return saveUser;
      }

}
