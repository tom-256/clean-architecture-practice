import { IEmployeeCreatePresenter } from "./IEmployeeCreatePresenter";
import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export class EmployeeCreateViewModel {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class EmployeeCreatePresenter implements IEmployeeCreatePresenter {
  complete(outputData: EmployeeCreateOutputData) {
    const userId = outputData.id;
    const userName = `${outputData.firstName} ${outputData.lastName}`;
    const model = new EmployeeCreateViewModel(userId, userName);
    console.log(`id: + ${model.id} + name: + ${model.name}`);
  }
}
