import { AccountBank } from "../../abstract/Banking";
import { CurrentAccountTax } from "../tax/AccountTax";
import { TypeAccount } from "../../abstract/Banking";

export class CurrentAccount extends AccountBank {
  constructor(agency_code: number, account: number, balance: number) {
    super(
      agency_code,
      account,
      balance,
      TypeAccount.current_account,
      new CurrentAccountTax()
    );
  }
}
