function fezz(message: string):string{
    let ok:boolean = false;
    for(let i = 0 ; i < message.length ; i++){
        if(message[i] == 'B'){
            message = [message.slice(0, i), 'Fezz', message.slice(i)].join('');
            ok = true;
            break;
        }
    }
    if(ok == false){
        message = message.concat('Fezz');
    }
    return message;
}

function reverse(message: string):string{
    let nr_cuv:number = message.length / 4;
    let cuv: string[] = [];
    for(let i = 1 ; i <= nr_cuv; i++){
        cuv[i] = message.slice((i-1)*4, i*4);
    }
    message = cuv[nr_cuv];
    for(let i = nr_cuv - 1; i > 0; i--){
        message = message.concat(cuv[i]);
    }
    return message;
}


function fizzbuzz(nr: number, rule: string): void {
    let message: string;
    for(let i = 1; i <= nr; i++ ){
        message = i.toString();
        if(i % 11 === 0){
            message = "Bong";
        }
        else{
            if(i % 3 === 0 && rule == 'yes'){
                message = "Fizz";
            }
            if(i % 5 === 0){
                if(message === i.toString()){
                    message = "Buzz";
                }
                else
                    message = message.concat("Buzz");
            }
            if(i % 7 === 0){
                if(message === i.toString()){
                    message = "Bang";
                }
                else
                    message = message.concat("Bang");
            }
        }
        if(i % 13 === 0){
            if(message === i.toString()){
                message = "Fezz";
            }
            else
                message = fezz(message);
        }
        if(i % 17 === 0){
            if(message.length > 4){
                message = reverse(message);
            }
        }
        console.log(message);
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function rules(){
    rl.question("Write a number: ", (userInput: string) => {
        const maxNr = Number(userInput);
        rl.question("Write a rule: ", (ruleUserInput: string) => {
            fizzbuzz(maxNr,ruleUserInput);
            rl.close();
        });
    });
}

rules();
//
// rl.question("Write a maximum number: ", number =>{
//     fizzbuzz(number);
//     rl.close();
// });
