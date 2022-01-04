module.exports = function toReadable (number) {
    let strNumber = String(number).padStart(3, '*');
    let firstNumber = strNumber[0];
    let secondNumber = strNumber[1];
    let thirdNumber = strNumber[2];
    let teens = strNumber.slice(1);
    let firstWord, secondWord, thirdWord;
    switch (firstNumber) {
      case '9': 
          firstWord = 'nine hundred';
          break;
      case '8':
          firstWord = 'eight hundred';
          break;
      case '7':
          firstWord = 'seven hundred';
          break;
      case '6':
          firstWord = 'six hundred';
          break;
      case '5':
          firstWord = 'five hundred';
          break;
      case '4':
          firstWord = 'four hundred';
          break;
      case '3':
          firstWord = 'three hundred';
          break;
      case '2':
          firstWord = 'two hundred';
          break;
      case '1':
          firstWord = 'one hundred';
          break;
      case '*':
          firstWord = '';
          break;
    }
  
        switch (secondNumber) {
      case '9': 
          secondWord = 'ninety';
          break;
      case '8':
          secondWord = 'eighty';
          break;
      case '7':
          secondWord = 'seventy';
          break;
      case '6':
          secondWord = 'sixty';
          break;
      case '5':
          secondWord = 'fifty';
          break;
      case '4':
          secondWord = 'forty';
          break;
      case '3':
          secondWord = 'thirty';
          break;
      case '2':
          secondWord = 'twenty';
          break;
      case '1':
          secondWord = '';
          break;
      case '0':
          secondWord = '';
          break;
      case '*':
          secondWord = '';
          break;
      default:
    }
  
    switch (thirdNumber) {
      case '9':
          thirdWord = 'nine';
          break;
      case '8':
          thirdWord = 'eight';
          break;
      case '7':
          thirdWord = 'seven';
          break;
      case '6':
          thirdWord = 'six';
          break;
      case '5':
          thirdWord = 'five';
          break;
      case '4':
          thirdWord = 'four';
          break;
      case '3':
          thirdWord = 'three';
          break;
      case '2':
          thirdWord = 'two';
          break;
      case '1':
          thirdWord = 'one';
          break;
      case '0':
          thirdWord = '';
          break;
    }
  
    if (Number(teens) > 9 && Number(teens) < 20) {
        secondWord = '';
        switch (teens) {
            case '19':
                thirdWord = 'nineteen';
                break;
            case '18':
                thirdWord = 'eighteen';
                break; 
            case '17':
                thirdWord = 'seventeen';
                break;
            case '16':
                thirdWord = 'sixteen';
                break;
            case '15':
                thirdWord = 'fifteen';
                break;
            case '14':
                thirdWord = 'fourteen';
                break;
            case '13':
                thirdWord = 'thirteen';
                break;
            case '12':
                thirdWord = 'twelve';
                break;
            case '11':
                thirdWord = 'eleven';
                break;
            case '10':
                thirdWord = 'ten';
                break;
            default:
                thirdWord = '';
                break;
          } 
      }    
  
    if (number === 0) {
        thirdWord = 'zero';
    }
  
    if (firstWord !== '' && secondWord !== '' && thirdWord !== '') {
        return (`${firstWord} ${secondWord} ${thirdWord}`);
    } 
    if (firstWord !== '' && secondWord !== '' && thirdWord === '') {
        return (`${firstWord} ${secondWord}`);
    }
    if (firstWord !== '' && secondWord === '' && thirdWord !== '') {
        return (`${firstWord} ${thirdWord}`);
    }
    if (firstWord !== '' && secondWord === '' && thirdWord === '') {
        return (`${firstWord}`);
    }
    if (firstWord === '' && secondWord !== '' && thirdWord !== '') {
        return (`${secondWord} ${thirdWord}`);
    } 
    if (firstWord === '' && secondWord !== '' && thirdWord === '') {
        return (`${secondWord}`);
    } 
    if (firstWord === '' && secondWord === '' && thirdWord !== '') {
        return (`${thirdWord}`);
    } 
}