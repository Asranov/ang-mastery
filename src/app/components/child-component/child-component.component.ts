import { IInfo } from './../parent-component/parent-component.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() dataFromParent: string = ''
  @Input() item: string = ''
  @Input() infos: IInfo[] = []
}
