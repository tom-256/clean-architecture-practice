import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export interface IEmployeeCreatePresenter {
  complete(outputData: EmployeeCreateOutputData): void;
}
