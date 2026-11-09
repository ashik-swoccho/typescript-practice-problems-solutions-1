# Access Modifiers in TypeScript OOP

## Introduction
In Object Oriented Programming , if we dont use any access modifier before a class property inside a class , then the property is public to all . So it can be easily Modifiable from outside the class.TypeScript solves this by giving us access modifiers (public,private,protected,readonly) keyword to control that access.

## How do Access Modifiers works?

1. public : This is default access modifier. If we dont use any keyword of specific access modifier keyword , then it auto become public. Any public property or method can be accessed from inside the class or from outside the class.

2. private: Marking a property as private locks it inside the class where it was defined , means it can only be accessed inside that particular class. It cannot be accessed directly from outside the class.

3. protected : A protected property is protected from outside of the class , but child classes that inherit using extends can use it.

4. readonly : readonly prevents mutation, once a readonly property set in the constructor , its value cannot be changed again.


Example : 
class BankAccount {
  public readonly accountNumber: string;
  protected ownerName: string;
  private balance: number;

  constructor(accountNumber: string, ownerName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

class StudentAccount extends BankAccount {
  public getAccountSummary(): string {
    return `Student: ${this.ownerName}, Acc: ${this.accountNumber}`;
  }
}


## Conclusion 
Using access modifiers properly does proper encapsulation in typescript projects ,  by hiding sensitive data using private , sharing reusable property with subclases with protected and locking fixed values with readonly.
