import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { CommonModule } from '@angular/common';
import { SvgRepoComponent } from '../svg-repo/svg-repo.component';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-repo-info',
  standalone: true,
  imports: [CommonModule,SvgRepoComponent],
  templateUrl: './repo-info.component.html',
  styleUrl: './repo-info.component.scss'
})
export class RepoInfoComponent implements OnInit {
  information:any;
  foldersList:any=[];
  storeRepoInformation$!: Observable<any>;;
  navList:any[]=["Code","Issues","Pull requests","Actions","Projects","Security Insights"];
  selectedNav:string="Code"
  constructor(private provider:ProviderService,private store:Store<{repoInformation:any[]}>){
    this.storeRepoInformation$ = store.select("repoInformation")
  } 
  ngOnInit(): void {
    // if(this.information!=undefined){
      this.storeRepoInformation$.subscribe((res:any)=>{
        console.log(res)
        this.information=res[res.length-1];
        // this.information = this.provider.SelectedUserInfo;
        this.provider.getAUser(this.information.owner.login).subscribe(async (user:any)=>{
          this.information=user[user.length-1];
          console.log("this.information",this.information);
          this.provider.fetchData(this.information.contents_url.slice(0,(this.information.contents_url.indexOf('{'))-1)).subscribe((data:any)=>{
            this.foldersList = data
          })
          // this.profilepath = res.avatar_url
          //  this.repoList = await lastValueFrom(this.provider.fetchData(res.repos_url))
          //  console.log(this.repoList)
          })
      })
      // this.information = this.provider.SelectedRepoInfo
      // this.provider.fetchData(this.information.contents_url.slice(0,(this.information.contents_url.indexOf('{'))-1)).subscribe((res:any)=>{
      //   this.foldersList = res
      // })
    // }
    
    
  }

}
