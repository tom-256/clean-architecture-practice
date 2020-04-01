import { Employee } from "../entity/employee";
import { IEmployeeRepository } from "./employeeRepository";

export class EmployeeMemoryRepository implements IEmployeeRepository {
  private memoryStorage = new Map();

  save(employee: Employee): void {
    this.memoryStorage.set(employee.id, employee);
  }

  findById(id: string): Employee {
    return this.memoryStorage.get(id);
  }

  cloneEmployee(employee: Employee): Employee {
    return new Employee(employee.id, employee.name);
  }
}
