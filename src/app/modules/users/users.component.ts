import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', './users2.component.scss', '../../../assets/icon.scss']
})
export class UsersComponent implements OnInit, AfterViewInit{
  userList = users

  selectedFilter: string = 'id-increasing';
  sortedUserList: User[] = [];
  searchedWords: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.sortedUserList = users

    document.getElementById('users-search')?.addEventListener('keyup', (event: any) => {
      this.searchedWords = event.target.value
      this.sortedUserList = users.filter(user => user.name.toLowerCase().includes(this.searchedWords.toLowerCase()))
      this.filterUsers();
    })

    document.getElementsByName("filter").forEach(element => {
      element.addEventListener('change', (event: any) => {
        if (event.target.checked) {
          this.selectedFilter = event.target.id;
          this.filterUsers();
        }
      })
    })
  }

  ngAfterViewInit(): void {

    document.querySelectorAll('div[class^="user-delete"]').forEach(element => {
      element.addEventListener('click', (event: any) => {
        this.sortedUserList = this.sortedUserList.filter(x => x.id != event.target.parentElement.className.split('-')[2])
      })
    })
  }

  filterUsers() {
    switch (this.selectedFilter) {
      case 'id-increasing':
        this.sortedUserList = this.sortedUserList.sort((a, b) => a.id - b.id);
        break;
      case 'id-decreasing':
        this.sortedUserList = this.sortedUserList.sort((a, b) => b.id - a.id);
        break;
      case 'name-increasing':
        this.sortedUserList = this.sortedUserList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-decreasing':
        this.sortedUserList = this.sortedUserList.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

  }
}
