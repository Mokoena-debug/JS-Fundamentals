const arg = process.argv[2]; // first argument after 'node script.js'
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
