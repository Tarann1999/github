import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  profilepath:string='';
  storeUserInformation$!: Observable<any>;
  information:any;
  repoList:any=[]
  constructor(private provider:ProviderService,private store:Store<{userInformation:any[]}>){
    this.storeUserInformation$ = store.select("userInformation")
  }
  ngOnInit() {
    this.storeUserInformation$.subscribe((res:any)=>{
      console.log(res)
      this.information=res[res.length-1];
      // this.information = this.provider.SelectedUserInfo;
      this.provider.getAUser(this.information.login).subscribe(async (res:any)=>{
        this.information=res;
        console.log("this.information",this.information)
        this.profilepath = res.avatar_url
         this.repoList = await lastValueFrom(this.provider.fetchData(res.repos_url))
         console.log(this.repoList)
        })
    })
    // this.information = this.provider.SelectedUserInfo
    // console.log(this.information)
    // this.information = 
    // this.provider.getAUser(this.information.login).subscribe(async (res:any)=>{
    // this.information=res;
    // console.log("this.information",this.information)
    // this.profilepath = res.avatar_url
    //  this.repoList = await lastValueFrom(this.provider.fetchData(res.repos_url))
    //  console.log(this.repoList)
    // })
    
    
  }
}
