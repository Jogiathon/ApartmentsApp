import { Component, Input } from '@angular/core';
import { IProperty } from 'src/app/model/iproperty';


@Component({
  selector: 'app-property-card',
  //template: `<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  // styles: ['h1 {font-weight: normal;}']
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

  @Input('property')
  Property!: IProperty;
  @Input() hideIcons!: boolean;

}


