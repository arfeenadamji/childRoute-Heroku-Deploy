import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
public userForm: FormGroup;
userService:UserService;
router: Router;
formBuilder:FormBuilder;

  constructor(injector:Injector) { 
    this.userService = injector.get(UserService);
    this.router = injector.get(Router);
    this.formBuilder = injector.get(FormBuilder);

    this.userForm = this.formBuilder.group({
      name:[''],
      email:[''],
      contact:['']
    })
  }

  ngOnInit(): void {
    }

    onSubmit(){
      this.userService.createUser(this.userForm.value);
      this.router.navigate(['list-users']);
      console.log("userForm.value",this.userForm.value);
    }
}
