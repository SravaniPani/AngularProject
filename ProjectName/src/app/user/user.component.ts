import { Component} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  //selectedUser = DUMMY_USERS[randomIndex];
//Using the concept of singlas

selectedUser = signal(DUMMY_USERS[randomIndex]);


  // "this" keyword is used refer the properties of same class
  // getter are used to return a value.

  get ImagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser() {
    //console.log("Clicked!!")
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
   // this.selectedUser = DUMMY_USERS[randomIndex];

   //Setting using the concept of signals
   this.selectedUser.set(DUMMY_USERS[randomIndex]);

    // this happens because zone.js, which is used by angualr internally. When some action performed this zone.js looks for all the possible events to occur.
  }
}
