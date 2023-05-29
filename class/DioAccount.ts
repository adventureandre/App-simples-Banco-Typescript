export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (valor: number, msn?: string): void => {
        if (this.validateStatus()) {
            this.balance += valor
            if (!msn) {
                console.log('Voce depositou R$ ' + valor);
            } else {
                console.log(msn);
            }
        }
    }

    withdraw = (valor: number): void => {
        if (this.status && this.balance > valor) {
            this.balance -= valor
            console.log('Voce sacou R$ ' + valor)
        } else if (this.status && this.balance < valor) {
            console.log('Saldo insulficiente, Seu limite é R$ ' + this.balance)
        } else {
            console.log('Erro ao Efetuar o saque! favor entre em contato com seu Gerente.')
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}
