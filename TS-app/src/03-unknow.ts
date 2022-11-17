let anyVar : any;
anyVar = 1;
anyVar = "string";
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = null;
anyVar = undefined;
anyVar = () => {};



let unknowVar : unknown;
unknowVar = 1;
unknowVar = "string";
unknowVar = true;
unknowVar = {};
unknowVar = [];

if(typeof unknowVar === "string"){
    unknowVar.toUpperCase();
}

if(typeof unknowVar === "boolean"){
  let isNew:boolean = unknowVar;
}

const parse = (str:string): unknown => {
  return JSON.parse(str);
}




