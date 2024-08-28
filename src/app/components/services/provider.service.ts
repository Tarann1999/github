import { provideHttpClient ,HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class ProviderService { 

  constructor(private http:HttpClient) { }
  SelectedRepoInfo:any;
  SelectedUserInfo:any;
  getRepo(){
    return this.http.get("https://api.github.com/repositories?per_page=2&page=1")
  }
  getUsers(){
    return this.http.get("https://api.github.com/users?per_page=10&page=1")
  }
  getAUser(username:string){
    return this.http.get('https://api.github.com/users/'+username)
  }
  fetchData(url:string){
    return this.http.get(url)
  } 
}
