export class Employee {
  name: string;
  company: string;
  area: string;
  gender: string;
  isNewToCompany: string;
  mobile: string;

  constructor(
    name: string,
    company: string,
    area: string,
    gender: string,
    isNewToCompany: string,
    mobile: string
  ) {
    this.name = name;
    this.company = company;
    this.area = area;
    this.gender = gender;
    this.isNewToCompany = isNewToCompany;
    this.mobile = mobile;
  }
}
