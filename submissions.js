const findSum = function(array) {
    let number = 0;

    for (let i = 0; i < array.length; i ++){
        number += array[i];
    }
    return number
  };
  
  
  const findFrequency = function(array) {
    const freq = { most: '', least: ''};
        
        const obj = {};
        array.forEach(element =>{
            if(!obj[element]) obj[element] = 1;
            else obj[element] ++;

        });
        freq.most = Object.keys(obj)[0];
        freq.least = Object.keys(obj)[Object.keys(obj).length -1];

        return freq;
  };

  
  const isPalindrome = function(str) {
    let lowerCase = str.toLowerCase();
    let reverse = lowerCase.split('').reverse().join('');
    
    return(reverse  === lowerCase);
  };

  
  const largestPair = function(array) {
    let pair = 0;
    let num2 = 0;
    for (i = 0; i < array.length; i ++){
        num2 = array[i] * array[i + 1];
        if(num2 > pair){
            pair = num2;
        }
    }
    return pair;
  };

  
  const removeParenth = function(str) {
    const stringOne = str.indexOf("(");
    const stringTwo = str.indexOf(")");
    return str.substring(0, stringOne) + str.substring(stringTwo + 1);
  };
  
  
  const scoreScrabble = function(str) {
    let num = 0;

    for (let i = 0; i < str.length; i++){

        switch (str[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'l':
            case 'n':
            case 'r':
            case 's':
            case 't':
                num += 1
                break;

            case 'd':
            case 'g':
                num += 2
                break;

            case 'b':
            case 'c':
            case 'm':
            case 'p':
                num += 3
                break;

            case 'f':
            case 'h':
            case 'v':
            case 'w':
            case 'y':
                num += 4
                break;

            case 'k':
                num += 5
                break;

            case 'j':
            case 'x':
                num += 8
                break;

            case 'q':
            case 'z':
                num += 10
                break;

            default:
                num += 0;
                break;
        };
    };

    return num;
  };
    
