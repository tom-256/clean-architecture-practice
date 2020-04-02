import { EmployeeRepository } from "./employeeRepository";
import { Employee } from "../enitty/employee";

export class EmployeeMemoryRepository implements EmployeeRepository {
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
