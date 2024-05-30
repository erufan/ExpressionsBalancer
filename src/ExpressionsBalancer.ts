interface ExpressionsBalancers {
  checkBalance: (input: string) => void;
}

class ExpressionsBalancer implements ExpressionsBalancers {
  private leftArray = ["(", "<", "[", "{"];
  private rightArray = [")", ">", "]", "}"];

  checkBalance(input: string) {
    let stringArray: string[] = [];

    for (let i = 0; i <= input.length; i++) {
      let ch = input[i];
      if (this.isLeft(ch)) stringArray.push(ch);

      if (this.isRight(ch)) {
        if (stringArray.length === 0)
          return console.log(`wrong opning at ${ch}`);

        let last = stringArray.pop();
        if (!this.matchLeftRight(last!, ch))
          return console.log(`wrong closing for ${last}`);
      }
    }

    if (stringArray.length !== 0)
      return console.log(`no closing for:=> ${stringArray.toString()}`);

    return console.log("the text is balanced");
  }

  private isLeft(element: string) {
    return this.leftArray.includes(element);
  }

  private isRight(element: string) {
    return this.rightArray.includes(element);
  }

  private matchLeftRight(left: string, right: string) {
    return this.leftArray.indexOf(left) === this.rightArray.indexOf(right);
  }
}

export default ExpressionsBalancer;
