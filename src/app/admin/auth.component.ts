import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../models/auth.service';
import { RestDataSource } from '../models/restDataSource';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string;
  public password: string;

  public errorMessage: string;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  authenticate(form: NgForm) {

    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe((response) => {
        if (response) {
          this.router.navigateByUrl('/admin/main')
        }
        this.errorMessage = "Authentication Failed !";
      }
      )

    }
    else {
      this.errorMessage = 'Form is not valid';
    }
  }

}
