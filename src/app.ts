class MyArrayWithStrings {
  myArray: string[] = ["maçã", "banana", "laranja"];

  getItemsFromMyArray(): Array<string> {
    return this.myArray;
  }

  addItemsToMyArray(fruit: string): void {
    this.myArray.push(fruit);
    console.log(`The ${fruit} added with successfully`);
  }

  removeItemsToMyArray(fruit: string): void {
    this.myArray = this.myArray.filter((item) => item !== fruit);
    console.log(`The ${fruit} removed with successfully`);
  }

  getItemByFruit(fruit: string) {
    return this.myArray.filter((item) => item === fruit).toString();
  }
}

class MyArrayWithNumbers {
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  checkIfNumberIsPair(number: number): boolean {
    return number % 2 === 0;
  }

  multiplyAllItemsFromArray(number: number): Array<number> {
    let newArray = this.myArray.map((element) => element * number);
    return newArray;
  }

  sum(num1: number, num2: number) {
    return num1 + num2;
  }

  celsius_to_fahrenheit(celsius: number): number {
    return celsius * 1.8 + 32;
  }

  areaOfRetangulo(base: number, height: number): number {
    return base * height;
  }

  invertString(text: string): string {
    return text.split("").reverse().join("");
  }

  checkIfCanDriver(age: number): boolean {
    return age >= 18 ? true : false;
  }

  calculator(
    number1: number,
    number2: number,
    operation: string
  ): number | string {
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "/":
        return number1 / number2;
      case "*":
        return number1 * number2;
      default:
        throw new Error("Operation not found, try again");
    }
  }

  greaterBetweenThreeNumbers(array: Array<number>): number {
    let than = array[0];

    array.slice(1).forEach((number) => {
      if (number > than) {
        than = number;
      }
    });

    return than;
  }

  discoverIfTheYearItIsBissexto(year: number): string {
    if (year <= 0) throw new Error("The Year need be greater than 0");

    if (year % 4 === 0) {
      return "is bissexto";
    }
    return "not is bissexto";
  }

  countUntilN(number: number): void {
    if (number <= 0) throw new Error("The number need be greater than 0");

    let begin = 0;
    while (begin < number) {
      begin++;
      console.log(begin);
    }
  }

  factorial(number: number): void {
    if (number < 0)
      throw new Error("The number need be greater than 0 or equal 0");

    if (number === 0 || number === 1) console.log(1);

    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
      console.log(i);
    }
  }

  elementGreaterInOneArray(array: Array<number>): string {
    if (array.length < 2)
      throw new Error("You need to pass at least two numbers in the array");

    let greater = array[0];

    array.forEach((number) => {
      if (number > greater) {
        greater = number;
      }
    });

    return `The greater number that exists in the array is ${greater}`;
  }

  concateArray(array1: Array<number>, array2: Array<number>): Array<number> {
    return array1.concat(array2).sort((a, b) => b - a);
    // explain: when A = 3 and B = 7
    //  7 - 3 = 4 (positive), then 7 goes before 3
    // explain: when A = 2 and B = 3
    // 3 - 2 = 1 (positive)
    //  return order by desc;

    // otherwise if had what do the revert, would be (A - B)
    // explain: when A = 3 and B = 7
    //  3 - 7 = - 4 (negative), then 3 goes before 7
    // explain: when A = 2 and B = 3
    // 2 - 3 = - 1 (negative)
    //  return order by asc;
  }

  palindrome(text: string): string {
    let invert_text = this.invertString(text);

    if (invert_text === text) return "Is Palindrome";

    return "Not is Palindrome";
  }

  occurrences(text: string) {}
}
