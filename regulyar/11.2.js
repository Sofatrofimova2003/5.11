let str = 'xaz x.z x3z x@z x$z xrz';

console.log(str.match(/x[^.@$]z/g));