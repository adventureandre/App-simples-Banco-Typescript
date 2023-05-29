import { DioAccount } from "./DioAccount";

export class AcumulativeAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (valor: number): void => {
        //Tentei usar Super nao sei o que foi nao deu!!
       //super.deposit(valor + 10)

        this.balance += valor + 10;
        console.log("Você depositou R$ " + valor+" Seu saldo agora e de "+ this.balance);
    }
}
