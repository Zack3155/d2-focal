const args = process.argv;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let arr = [];
for(let i = 0; i < args[2]; ++i) arr.push(getRandomIntInclusive(1, 6)); 
console.log(`Rolled ${args[2]} dice: ${arr}`);