import { Component, OnInit } from '@angular/core';

interface IMessangers {
  id: string;
  name: string;
  ownerName: string;
  title: string;
  openedYear: number;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-messangers',
  templateUrl: './messangers.component.html',
  styleUrls: ['./messangers.component.css']
})
export class MessangersComponent implements OnInit {
  selectedUser: IUser | undefined;
  selectedMessenger: IMessangers | undefined;
  messengers: IMessangers[] = [
    { id: 'telegram', name: 'Telegram', ownerName: 'Pavel Durov', title: 'Messaging App', openedYear: 2013 },
    { id: 'instagram', name: 'Instagram', ownerName: 'Kevin Systrom', title: 'Photo Sharing App', openedYear: 2010 },
    { id: 'facebook', name: 'Facebook', ownerName: 'Mark Zuckerberg', title: 'Social Media Platform', openedYear: 2004 },
    { id: 'twitter', name: 'Twitter', ownerName: 'Jack Dorsey', title: 'Microblogging Platform', openedYear: 2006 }
  ];
  selectedUserExpanded: boolean = false;

  users: IUser[] = [
    {
      id: 1,
      name: "John",
      age: 20
    },
    {
      id: 2,
      name: "Stiv",
      age: 21
    },
    {
      id: 3,
      name: "Alice",
      age: 56
    }
  ]

  onUserClick(user: IUser) {
    if (this.selectedUser === user) {
      this.selectedUserExpanded = !this.selectedUserExpanded;
    } else {
      this.selectedUser = user;
      this.selectedUserExpanded = false;
    }
  }


  ngOnInit() {
    this.selectedMessenger = this.messengers.find(messenger => messenger.id === 'telegram');
  }

  onMessengerChange() {
    const selected = this.messengers.find(messenger => messenger.id === (this.selectedMessenger ? this.selectedMessenger.id : undefined));

    if (selected) {
      this.selectedMessenger = selected;
    }
  }
}
