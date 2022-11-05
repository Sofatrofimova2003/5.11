let str = 'x[]z x{}z x.z x()z';

console.log(str.match(/x[\(\)\[\]\{\}]+z/g));