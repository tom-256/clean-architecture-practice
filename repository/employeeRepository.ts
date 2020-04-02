import { Employee } from "../entity/employee";

export interface EmployeeRepository {
  save(employee: Employee): void;
  findById(id: string): Employee;
  cloneEmployee(employee: Employee): Employee;
}
