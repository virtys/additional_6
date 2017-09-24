module.exports = function zeros(expression) {
  expression = expression.split('*');
  let resultStr = '';
  if(expression.length == 1) {
    resultStr = expression[0].includes('!!') 
             ? factorial(parseInt(expression[0]),2) 
             : factorial(parseInt(expression[0]),1);
  }
  else {
   resultStr = expression.reduce(function(previousValue, currentValue) {
     
    let prev = previousValue.includes('!') 
             ? previousValue.includes('!!') 
                ? factorial(parseInt(previousValue),2)
                : factorial(parseInt(previousValue),1)
             : previousValue;
     
    let curr = currentValue.includes('!!') 
             ? factorial(parseInt(currentValue),2) 
             : factorial(parseInt(currentValue),1);
     return multiply(prev, curr);
    }); 
  }

  return countZeros(resultStr);
  
}

function factorial(n, o) {

  let f=(o==2 && n%2==0) ? 2 : 1;
  let start = f+o;
  for(let i=start; i<=n;) {
    f = multiply(f+'',i+'');
    i=i+o;
  }
  return f+'';
}
function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();
  let result = [];

  for (let i = 0; first[i] >= 0; i++) {
        for (let j = 0; second[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += first[i] * second[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
}


function countZeros(str) {
  str = str.split('').reverse();
  let count = 0;
  for(count; str[count] == '0'; count++ ) {}
  
  return count;
}
