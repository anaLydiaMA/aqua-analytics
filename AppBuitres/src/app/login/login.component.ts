import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from '../servicios/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  user: any;
  userResult: any[] = [];
  username: any;
  password: any;
  URL = 'https://aqua-container.mybluemix.net/users/login';

  constructor(private uf: FormBuilder, private httpRequestService: HttpRequestService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.userForm = this.uf.group({
      username: ['', Validators.required ],
      password: ['', [ Validators.required, Validators.minLength(8)] ],
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
        this.httpRequestService.Acceso = false;
        this.httpRequestService.httpPost( this.user , this.URL )
           .subscribe(newuser => {
               this.httpRequestService.User = this.user;
               if (this.httpRequestService.Acceso === true ) {
               this.router.navigate(['/Inicio']);
               this.httpRequestService.Acceso = true;
               }
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
