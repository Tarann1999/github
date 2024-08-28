import { Component, Input, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProviderService } from '../../services/provider.service';
import { SvgRepoComponent } from "../../svg-repo/svg-repo.component";
import { CommonModule, NgStyle } from '@angular/common';
import { Store } from '@ngrx/store';
import { updateRepoInformation } from '../../../store/actions/repoInformation.action';

@Component({
  selector: 'app-repo',
  standalone: true,
  imports: [RouterModule, SvgRepoComponent,CommonModule,NgStyle],
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.scss'
})
export class RepoComponent implements OnInit{
  repolanguage:string='';
  color:string='';
  constructor(private provider:ProviderService,private store : Store){}
 
  @Input() information : any;
  ngOnInit(): void {
    this.provider.fetchData(this.information.languages_url).subscribe((res:any)=>{
      this.color='#'+res[Object.keys(res)[0]]
      this.repolanguage = Object.keys(res)[0];
    })
  }
  selectRepo(){
    this.store.dispatch(updateRepoInformation({information:this.information}))
    // this.provider.SelectedRepoInfo = this.information;

  }
}
