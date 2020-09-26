import { Component, OnInit } from '@angular/core';
import { RamdomUserService } from '../../services/ramdom-user.service';

@Component({
  selector: 'app-ramdom-user',
  templateUrl: './ramdom-user.component.html',
  styleUrls: ['./ramdom-user.component.css']
})
export class RamdomUserComponent implements OnInit {
  ramdomUsers: any[] = [];
  constructor(
    protected RamdomUserService: RamdomUserService
  ) {
  }

  ngOnInit() {
    this.RamdomUserService.getUsers()
    .subscribe(
      (data) => {
        this.ramdomUsers = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
