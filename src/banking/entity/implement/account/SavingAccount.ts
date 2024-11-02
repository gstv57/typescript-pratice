import { AccountBank } from "../../abstract/Banking";
import { SavingAccountTax } from "../tax/AccountTax";
import { TypeAccount } from "../../abstract/Banking";

export class SavingAccount extends AccountBank {
  constructor(agency_code: number, account: number, balance: number) {
    super(
      agency_code,
      account,
      balance,
      TypeAccount.saving_account,
      new SavingAccountTax()
    );
  }
}
