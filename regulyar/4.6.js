let str = '[abc] {abc} abc (abc) [abc]';

console.log(str.replace(/\[abc*\]/g, '!'));