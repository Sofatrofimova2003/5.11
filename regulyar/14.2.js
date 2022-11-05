let str = '^xx axx ^zz bkk @ss';

console.log(str.match(/[^@\^][a-z][a-z]/g));