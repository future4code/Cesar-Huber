export enum ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: ROLES
  ) {}

  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password, data.role)
  }

  public getUserInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    }
  }

  public getPassword() {
    return this.password
  }

  public getUserId() {
    return this.id
  }

  public getUserEmail() {
    return this.email
  }

  public getUserRole() {
    return this.role
  }
}