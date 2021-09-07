import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  Users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        console.log("e",e.payload.doc.id);
        return {
          id: e.payload.doc.id,
          // console.log()
          ...e.payload.doc.data() as User
        } as User;
      })
    });    
  }

  removeUser = user => this.userService.deleteUser(user);
}