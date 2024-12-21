export interface AccountTax {
  withdrawTax: number;
  depositTax: number;
  calculateWithdrawTax(amount: number): number;
  calculateDepositTax(amount: number): number;
}

export class CurrentAccountTax implements AccountTax {
  withdrawTax: number = 0.05;
  depositTax = 0.01;

  calculateWithdrawTax(amount: number): number {
    return amount * this.withdrawTax;
  }

  calculateDepositTax(amount: number): number {
    return amount * this.depositTax;
  }
}

export class SavingAccountTax implements AccountTax {
  withdrawTax = 0.02;
  depositTax = 0;

  calculateWithdrawTax(amount: number): number {
    return amount * this.withdrawTax;
  }

  calculateDepositTax(amount: number): number {
    return amount * this.depositTax;
  }
}
