let str = 'xaz x$z x-z xcz x+z x%z x*z';

console.log(str.match(/x[$+-]z/g));