import { Component } from '@angular/core';

export interface IInfo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  data: string = 'Hello world!';
  infos: IInfo[] = [
    { id: '1', name: 'Info 1' },
    { id: '2', name: 'Info 2' },
    { id: '3', name: 'Info 3' },
    { id: '4', name: 'Info 4' },
    { id: '5', name: 'Info 5' },
  ]
} 
