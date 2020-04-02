import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export interface EmployeeCreatePresenter {
  complete(outputData: EmployeeCreateOutputData): void;
}
