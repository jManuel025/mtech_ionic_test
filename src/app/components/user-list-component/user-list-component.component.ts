import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss'],
})
export class UserListComponentComponent implements OnInit {

  users$: Observable<User[]> = of([])
  errorMessage: string | null = null

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      catchError(() => {
        this.errorMessage = "Failed to get users"
        return of([])
      })
    )
  }
}
