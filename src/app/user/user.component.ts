import { CreateUserComponent } from './../create-user/create-user.component';
import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
private users: Array<UserModel>;

  constructor(private UserService: UserService,
              private router:Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    //console.log(this.UserService.getUsers());
    this.UserService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }

  public edit(user : UserModel):void{
    sessionStorage.setItem('user', JSON.stringify( user));
    this.router.navigate(['/createUserComponent']);
  }
}
