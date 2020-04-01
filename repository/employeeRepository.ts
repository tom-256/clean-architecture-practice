import { Employee } from "../entity/employee";

export interface IEmployeeRepository {
  save(employee: Employee): void;
  findById(id: string): Employee;
  cloneEmployee(employee: Employee): Employee;
}
