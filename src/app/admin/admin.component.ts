import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../models/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _authservice:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {

    this._authservice.clear();
    this._router.navigateByUrl("/");
  }

}
