import { Component, OnInit } from '@angular/core';

interface IMessangers {
  id: string;
  name: string;
  ownerName: string;
  title: string;
  openedYear: number;
}

@Component({
  selector: 'app-messangers',
  templateUrl: './messangers.component.html',
  styleUrls: ['./messangers.component.css']
})
export class MessangersComponent implements OnInit {
  selectedMessenger: any;
  messengers: IMessangers[] = [
    { id: 'telegram', name: 'Telegram', ownerName: 'Pavel Durov', title: 'Messaging App', openedYear: 2013 },
    { id: 'instagram', name: 'Instagram', ownerName: 'Kevin Systrom', title: 'Photo Sharing App', openedYear: 2010 },
    { id: 'facebook', name: 'Facebook', ownerName: 'Mark Zuckerberg', title: 'Social Media Platform', openedYear: 2004 },
    { id: 'twitter', name: 'Twitter', ownerName: 'Jack Dorsey', title: 'Microblogging Platform', openedYear: 2006 }
  ];

  ngOnInit() {
    this.selectedMessenger = this.messengers.find(messenger => messenger.id === 'telegram');
  }

  onMessengerChange() {
    const selected = this.messengers.find(messenger => messenger.id === this.selectedMessenger);

    if (selected) {
      this.selectedMessenger = selected;
    }
  }
}
