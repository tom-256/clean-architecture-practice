import { EmployeeCreateUsecase } from "../usecases/employeeCreateUsecase";
import { EmployeeCreateInputData } from "../usecases/employeeCreateInputData";

export class EmployeeController {
  private readonly employeeCreateUseCase: EmployeeCreateUsecase;

  constructor(employeeCreateUseCase: EmployeeCreateUsecase) {
    this.employeeCreateUseCase = employeeCreateUseCase;
  }

  public createEmployee(id: string, firstName: string, lastName: string): void {
    const inputData = new EmployeeCreateInputData(id, firstName, lastName);
    this.employeeCreateUseCase.handle(inputData);
  }
}
