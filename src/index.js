module.exports = function toReadable(number) {
    let readbleNumber = "";
    if (number === 0) {
        return "zero";
    }
    let hundreds = Math.floor(number / 100);
    switch (hundreds) {
        case 1:
            readbleNumber += "one hundred ";
            break;
        case 2:
            readbleNumber += "two hundred ";
            break;
        case 3:
            readbleNumber += "three hundred ";
            break;
        case 4:
            readbleNumber += "four hundred ";
            break;
        case 5:
            readbleNumber += "five hundred ";
            break;
        case 6:
            readbleNumber += "six hundred ";
            break;
        case 7:
            readbleNumber += "seven hundred ";
            break;
        case 8:
            readbleNumber += "eight hundred ";
            break;
        case 9:
            readbleNumber += "nine hundred ";
            break;
        default:
            break;
    }
    let ten = Math.floor((number - hundreds * 100) / 10);

    if (ten !== 1) {
        switch (ten) {
            case 2:
                readbleNumber += "twenty ";
                break;
            case 3:
                readbleNumber += "thirty ";
                break;
            case 4:
                readbleNumber += "forty ";
                break;
            case 5:
                readbleNumber += "fifty ";
                break;
            case 6:
                readbleNumber += "sixty ";
                break;
            case 7:
                readbleNumber += "seventy ";
                break;
            case 8:
                readbleNumber += "eighty ";
                break;
            case 9:
                readbleNumber += "ninety ";
                break;
            default:
                break;
        }
        let one = number - hundreds * 100 - ten * 10;

        switch (one) {
            case 1:
                readbleNumber += "one";
                break;
            case 2:
                readbleNumber += "two";
                break;
            case 3:
                readbleNumber += "three";
                break;
            case 4:
                readbleNumber += "four";
                break;
            case 5:
                readbleNumber += "five";
                break;
            case 6:
                readbleNumber += "six";
                break;
            case 7:
                readbleNumber += "seven";
                break;
            case 8:
                readbleNumber += "eight";
                break;
            case 9:
                readbleNumber += "nine";
                break;
            default:
                break;
        }
    } else {
        ten = number - hundreds * 100;
        switch (ten) {
            case 10:
                readbleNumber += "ten";
                break;
            case 11:
                readbleNumber += "eleven";
                break;
            case 12:
                readbleNumber += "twelve";
                break;
            case 13:
                readbleNumber += "thirteen";
                break;
            case 14:
                readbleNumber += "fourteen";
                break;
            case 15:
                readbleNumber += "fifteen";
                break;
            case 16:
                readbleNumber += "sixteen";
                break;
            case 17:
                readbleNumber += "seventeen";
                break;
            case 18:
                readbleNumber += "eighteen";
                break;
            case 19:
                readbleNumber += "nineteen";
                break;
            default:
                break;
        }
    }
    return readbleNumber.trim();
};
