module.exports = function toReadable (number) {
	let SingleDigits = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
	let Teens = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
	let Dozens = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
	
    let calcSingleDigits = n => SingleDigits[n];
    let calcTeens = n => Teens[n];
    let calcDozens = n => n % 10 > 0 ? Dozens[Math.floor(n / 10) * 10] + ' ' + SingleDigits[+String(n).slice(1)] : Dozens[Math.floor(n / 10) * 10];
    
    function calcSingleHundred(n) {
        switch (true) {
            case (n < 10): return calcSingleDigits(n); 
            case (n >= 10 && n < 20): return calcTeens(n);
            case (n >= 20 && n < 100): return calcDozens(n); 
        }
    }

    if (number < 100) {
        return calcSingleHundred(number);
    } else {
        if (number % 100) {
            return calcSingleDigits(+String(number).slice(0,1)) + ' hundred ' + calcSingleHundred(+String(number).slice(1));
        } else {
            return calcSingleDigits(+String(number).slice(0,1)) + ' hundred';
        }
    }
}
