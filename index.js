// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] == 'number') {
                count++;
            }
        }
        return count;
    }
    printNumbers(data) {
        return data;
    }
    odds() {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] == 'number' && data[i] % 2 === 1) {
                count++;
            }
        return count;
        }
    }
    evens() {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] == 'number' && data[i] % 2 === 0) {
                count++;
            }
        return count;
        }
    }
    sum() {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] == 'number') {
                sum += data[i];
            }
        }
        return sum;
    }
    product() {
        return data.reduce((total, datum) => total * datum.quantity, 0);
    }
    greaterThan(target) {
        const greaterThans = [];
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] > target) {
                greaterThans.push(data[i]);
            }
        }
        return greaterThans;
      }
    howMany(target) {
        const countNumber = (arr) => {
            const numCount = [];
            for (let number of data) {
                if (typeof data[i] == 'number') {
                    number in numCount ? (numCount[number] += 1) : (numCount[number] = 1);
            }
        }
        return numCount
      };
}
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number