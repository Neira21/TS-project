//Nico => [N,i,c,o] => string => string[]
//[N,i,c,o] => Nico => string[] => string


function parseStr(input: string) : string[];
function parseStr(input: string[]) : string;
function parseStr(input: number) : string;

function parseStr(input : unknown) : unknown{
  if(Array.isArray(input)){
    return input.join(''); // string
  }else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return input.toString().split(''); // string[]
  }
}

const rtaArray = parseStr("Alvaro");
rtaArray.reverse();
console.log("Alvaro = "+rtaArray);


const rtaArray2 = parseStr(["A", "l", "v", "a", "r", "o"]);
console.log('"A", "l", "v", "a", "r", "o"] = '+ rtaArray2);

const rtaArray3 = parseStr(123456);
console.log("123456 = "+rtaArray3);
