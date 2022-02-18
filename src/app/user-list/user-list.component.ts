import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user:any;

  constructor(private userserviceService: UserListService) { }

  ngOnInit() {
    this.userserviceService.getUsers().subscribe(data =>{
      this.user = data;
    });
  }

}