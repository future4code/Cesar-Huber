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

  public getUserInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role
    }
  }

  public getHash() {
    return this.password
  }

  public getUserId() {
    return this.id
  }

  public getUserRole() {
    return this.role
  }
}