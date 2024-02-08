export default class SSNGenerator {
    static generateSSN() {
        const firstDigit = Math.floor(Math.random() * 7);
        const secondDigit = Math.floor(Math.random() * 10);
        const eightDigits = Math.floor(Math.random() * 100000000);
        const tenDigits = firstDigit + '' + secondDigit + '' + eightDigits;
        const lastTwoDigits = parseInt(tenDigits) % 97;
        const fullSSN = tenDigits + lastTwoDigits.toString().padStart(2, '0');

        // const tenLetters = tenDigits.toString();
        // const digitslength = tenDigits.toString().length;

        // const digitsArray = [];
        // for (let i = 0; i < digitslength; i++) {
        //     digitsArray.push(tenLetters.charAt(i));
        // }

        // const firstStage = [];
        // for (const [index, digit] of digitsArray.entries()) {
        //     if (index % 2 === 0) {
        //         firstStage.push(parseInt(digit));
        //     } else {
        //         firstStage.push(parseInt(digit) * 2);
        //     }
        // }

        // const secondStage = [];
        // for (const digit of firstStage) {
        //     if (digit.toString().length === 2) {
        //         secondStage.push(parseInt(digit.toString().charAt(0)) + parseInt(digit.toString().charAt(1)));
        //     } else {
        //         secondStage.push(digit);
        //     }
        // }

        // const tenDigitsSum = secondStage.reduce((sum, curVal) => {
        //     return sum = sum + curVal
        // }, 0);

        // const lastNumber = parseInt(tenDigitsSum.toString().slice(-1));
        // const lastDigit = 0;

        // console.log(firstDigit + ' ' + tenDigits);
        return fullSSN;
    }
}