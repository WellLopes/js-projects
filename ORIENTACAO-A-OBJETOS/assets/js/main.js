class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this._agencia = agencia
    this._numero = numero
    this._tipo = tipo
    this._saldo = 0
  }
  
  get saldo() {
    return this._saldo
  }
  
  set saldo(valor) {
    this._saldo = valor
  }


  sacar(valor) {

    if(valor > this._saldo) {
      return `Saldo insuficiente.`
    } else {
      this._saldo = this._saldo - valor
      return `Saque realizado com sucesso.`
    }
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
    
    return `Depósito realizado com sucesso.`
  }
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this._tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito(){
    return this._cartaoCredito
  }
  
  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }

}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero)
    this._tipo = 'poupança'
  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero)
    this._tipo = 'universitária'
  }

  sacar(valor) {
    if(this._saldo < valor) {
      return `Saldo insuficiente`
    } else if(valor > 500) {
      return `Saque inválido, tente um valor abaixo de $500`
    } else {
      this._saldo = this._saldo - valor
      return `Saque realizado com sucesso.`
    }
  }
}