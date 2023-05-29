import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {AcumulativeAccount} from "./class/AcumulativeAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(12)
peopleAccount.withdraw(10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(25)
companyAccount.getLoan(1000)
console.log(companyAccount)

const acumulativeAccount: AcumulativeAccount = new AcumulativeAccount('Andre', 25)
acumulativeAccount.deposit(15)
acumulativeAccount.setName('Livia')
console.log(acumulativeAccount)