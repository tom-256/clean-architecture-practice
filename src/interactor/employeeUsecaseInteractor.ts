import { EmployeeCreateUsecase } from "../usecases/employeeCreateUsecase";
import { EmployeeRepository } from "../repository/employeeRepository";
import { EmployeeCreatePresenter } from "../presenter/IEmployeeCreatePresenter";
import { EmployeeCreateInputData } from "../usecases/employeeCreateInputData";
import { Employee } from "../enitty/employee";
import { EmployeeCreateOutputData } from "../usecases/employeeCreateOutputData";

export class EmployeeCreateInteractor implements EmployeeCreateUsecase {
  private readonly employeeRepository: EmployeeRepository;
  private readonly presenter: EmployeeCreatePresenter;

  constructor(
    employeeRepository: EmployeeRepository,
    presenter: EmployeeCreatePresenter
  ) {
    this.employeeRepository = employeeRepository;
    this.presenter = presenter;
  }

  handle(inputData: EmployeeCreateInputData): void {
    const employeeId = inputData.id;
    const duplicateUser = this.employeeRepository.findById(employeeId);
    if (duplicateUser !== null) {
      throw new Error("duplicated");
    }

    const employee = new Employee(
      employeeId,
      inputData.firstName,
      inputData.lastName
    );
    this.employeeRepository.save(employee);

    const outputData = new EmployeeCreateOutputData(
      employee.id,
      employee.firstName,
      employee.lastName
    );
    this.presenter.complete(outputData);
  }
}
