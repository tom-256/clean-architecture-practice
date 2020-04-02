import { EmployeeCreateInputData } from "./employeeCreateInputData";

export interface EmployeeSaveUsecase {
  handle: (inputData: EmployeeCreateInputData) => void;
}
