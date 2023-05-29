import {DioAccount} from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (valor: number): void => {
        const msn = 'Voce pegou um empréstimo de R$' + valor + ' Seu saldo agora é ' + (this.balance + valor);
        this.deposit(valor, msn);
    }
}
