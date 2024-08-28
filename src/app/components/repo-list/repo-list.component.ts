import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { RepoComponent } from './repo/repo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [ RepoComponent,CommonModule ],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.scss'
})
export class RepoListComponent implements OnInit{
  repoList:any[]=[];
  constructor(private provider:ProviderService){}
  ngOnInit(): void { 
    this.provider.getRepo().subscribe((res:any)=>{
      this.repoList=res.slice(0,7);
      console.log(res)
    }) 
  }
  
}
