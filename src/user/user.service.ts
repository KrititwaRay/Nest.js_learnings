import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [
    { id: 1, name: "krititwa" },
    { id: 2, name: "Sudipta" },
  ];

  getAllUsers() {
    return this.user;
  }

  getUserById(id: number) {
    return this.user.find((user) => user.id === id);
  }
}