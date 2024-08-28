import { Routes } from '@angular/router';
import { CoreComponentComponent } from './components/core-component/core-component.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepoInfoComponent } from './components/repo-info/repo-info.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:CoreComponentComponent},
    {path:'userInfo',component:UserInfoComponent},
    {path:'repoInfo',component:RepoInfoComponent} 

];
