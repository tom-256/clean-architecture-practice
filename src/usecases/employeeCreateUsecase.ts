import { EmployeeCreateInputData } from "./employeeCreateInputData";

export interface EmployeeCreateUsecase {
  handle: (inputData: EmployeeCreateInputData) => void;
}
