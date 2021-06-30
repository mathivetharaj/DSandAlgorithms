const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    terminal:false
});

process.stdin.setEncoding('utf-8');
rl.once('line', (line)=>{
    rl.on('line', readLine(line));
})

function readLine(line){
    const arr=line.toString().split(' ');
    console.log(parseInt(arr[0])+parseInt(arr[1]));
    process.exit();
}