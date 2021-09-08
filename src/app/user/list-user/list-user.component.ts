import { Component, Injector, OnInit } from '@angular/core';
import { CreateUserComponent } from '../create-user/create-user.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent extends CreateUserComponent implements OnInit {
  Users: User[];
  userService: UserService;

  constructor(injector: Injector) {
    super(injector);
}
  ngOnInit() {
    console.log('form value from create component', this.userForm.value.email)
    this.userService.getUserList().subscribe(res => {
      console.log("res",res);
      this.Users = res.map( e => {
        console.log("e",e.payload.doc.id);
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        } 
      })
    });    
  }

  removeUser = user => this.userService.deleteUser(user);
}

