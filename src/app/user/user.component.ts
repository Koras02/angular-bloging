import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [FormsModule, NgIf, NgFor, NgClass, NgStyle], // 모듈 추가
})
export class UserComponent {
  // 인터폴레이션
  name: string = 'Angular';

  // 속성 바인딩
  userImage: string = 'https://placehold.co/600x400';

  // 이벤트 바인딩
  message: string = '';

  sayHello(): void {
    this.message = `Hello, ${this.name}`;
  }

  username: string = '';

  // 구조 지시자
  isLoggedIn: boolean = false; // *ngIf 조건
  users: { name: string }[] = [
    // *ngFor 조건
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
  ];

  // 속성 지시자
  isActive: boolean = true;
  isDisabled: boolean = false;
}
