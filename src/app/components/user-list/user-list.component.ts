import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ProviderService } from '../services/provider.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent,CommonModule,RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  userlist:any[]=[];
  constructor(private provider:ProviderService){}
  ngOnInit(): void {  
    this.provider.getUsers().subscribe((res:any)=>{
      this.userlist = res;
      console.log(res)
    })
  }
}
