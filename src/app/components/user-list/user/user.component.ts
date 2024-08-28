import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Store } from '@ngrx/store';
import { updateUserInformation } from '../../../store/actions/userInformation.action';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private provider:ProviderService,private store:Store){}
  @Input() information : any;
  selectUser(){
    this.store.dispatch(updateUserInformation({information:this.information}))
    // this.provider.SelectedUserInfo = this.information;

  }
}
