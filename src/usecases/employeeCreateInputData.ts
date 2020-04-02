export class EmployeeCreateInputData {
  id: string;
  firstName: string;
  lastName: string;
  constructor(id: string, firtstName: string, lastName: string) {
    this.id = id;
    this.firstName = firtstName;
    this.lastName = lastName;
  }
}
