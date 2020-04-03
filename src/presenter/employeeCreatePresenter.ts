import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export class EmployeeCreateViewModel {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class EmployeeCreatePresenter implements EmployeeCreatePresenter {
  complete(outputData: EmployeeCreateOutputData): void {
    const employeeId = outputData.id;
    const employeeName = `${outputData.firstName} ${outputData.lastName}`;
    const model = new EmployeeCreateViewModel(employeeId, employeeName);
    console.log(`id: + ${model.id} + name: + ${model.name}`);
  }
}
