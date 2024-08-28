import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RepoListComponent } from '../repo-list/repo-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { SvgRepoComponent } from '../svg-repo/svg-repo.component';
@Component({
  selector: 'app-core-component',
  standalone: true,
  imports: [CommonModule, RepoListComponent, UserListComponent,SvgRepoComponent],
  templateUrl: './core-component.component.html',
  styleUrl: './core-component.component.scss'
})
export class CoreComponentComponent {
  title = 'github-web-app';
  selectedNav:string='Topics';
  repoBoolean:boolean = true;
  navList:string[]=['Explore','Topics','Trending','Collections','Events','GitHub Sponsors']
}
