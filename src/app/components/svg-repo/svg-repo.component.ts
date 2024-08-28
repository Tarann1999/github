import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-repo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-repo.component.html',
  styleUrl: './svg-repo.component.scss'
})
export class SvgRepoComponent {
  @Input()  Name:string=''

}
