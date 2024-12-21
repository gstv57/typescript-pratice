import { AccountTax } from "../implement/tax/AccountTax";

export enum TypeAccount {
  current_account,
  saving_account,
}

interface IOperation {
  withdraw(amount: number): string;
  deposit(amount: number): string;
  readonly accountStatement: Array<IStatementItem> | null;
}

interface IStatementItem {
  amount: number;
  type: string;
  tax?: number;
}

export abstract class AccountBank implements IOperation {
  private agency_code: number;
  private account: number;
  private balance: number;
  private typeAccount: TypeAccount;
  private statement: Array<IStatementItem>;
  protected tax: AccountTax;

  constructor(
    agency_code: number,
    account: number,
    balance: number,
    typeAccount: TypeAccount,
    tax: AccountTax
  ) {
    this.agency_code = agency_code;
    this.account = account;
    this.balance = balance;
    this.typeAccount = typeAccount;
    this.statement = [];
    this.tax = tax;
  }

  get agencyCode(): number {
    return this.agency_code;
  }

  get accountNumber(): number {
    return this.account;
  }

  get accountBalance(): number {
    return this.balance;
  }

  get accountType(): TypeAccount {
    return this.typeAccount;
  }

  get accountStatement(): Array<IStatementItem> | null {
    return this.statement.length > 0 ? this.statement : null;
  }

  withdraw(amount: number): string {
    if (amount <= 0) {
      throw new Error("The amount to withdraw need be greater than 0");
    }

    const tax = this.tax.calculateWithdrawTax(amount);
    const totalAmount = amount + tax;

    if (this.balance < totalAmount) {
      throw new Error("You do not have this amount in your account balance");
    }

    this.balance -= totalAmount;

    this.statement.push({
      amount: -amount,
      type: "withdraw",
      tax: tax,
    });

    return `Successful withdrawal amount: ${amount}, tax: ${tax}`;
  }

  deposit(amount: number): string {
    if (amount <= 0) {
      throw new Error("The amount to deposit need be greater than 0");
    }

    const tax = this.tax.calculateDepositTax(amount);
    const netAmount = amount - tax;

    this.balance += netAmount;

    this.statement.push({
      amount: amount,
      type: "deposit",
      tax: tax,
    });

    return `Successful deposit amount: ${amount}, tax: ${tax}`;
  }
}
