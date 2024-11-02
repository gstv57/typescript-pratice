import { SavingAccount } from "./banking/entity/implement/account/SavingAccount";
import { CurrentAccount } from "./banking/entity/implement/account/CurrentAccount";

const savingAccount = new SavingAccount(1, 123, 1000);
console.log(savingAccount.withdraw(100));

const currentAccount = new CurrentAccount(1, 456, 1000);
console.log(currentAccount.withdraw(100));
