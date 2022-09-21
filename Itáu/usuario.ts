export class user
{
    nomeBanco: string
    nomeCliente: string
    saldo: number
    contaCorrente: number
    poupanca: number
    invest: number
    total: number
    ativo: boolean
    extrato: number    
}

var cliente = new user()
cliente.nomeBanco = "Nubank"
cliente.nomeCliente = "Davi Musser"
cliente.contaCorrente = 25000.00
cliente.poupanca = 15000.00
cliente.total = cliente.contaCorrente + cliente.poupanca
cliente.invest = cliente.total*0.1
cliente.extrato = cliente.contaCorrente + cliente.poupanca + cliente.invest
cliente.ativo = true