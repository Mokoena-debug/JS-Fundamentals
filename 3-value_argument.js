const args = process.argv.slice(2); // ignore the first two default arguments

if (!args[0]) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
