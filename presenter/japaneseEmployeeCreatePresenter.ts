import { IEmployeeCreatePresenter } from "./IEmployeeCreatePresenter";
import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export class JapaneseEmployeeCreateViewModel {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class JapaneseEmployeeCreatePresenter implements IEmployeeCreatePresenter {
  complete(outputData: EmployeeCreateOutputData) {
    const userId = outputData.id;
    const userName = `${outputData.lastName} ${outputData.firstName}`;
    const model = new JapaneseEmployeeCreateViewModel(userId, userName);
    console.log(`id: + ${model.id} + name: + ${model.name}`);
  }
}
