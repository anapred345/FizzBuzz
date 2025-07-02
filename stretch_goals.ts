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


function fizzbuzz(nr: number, rule: string[]): void {
    let message: string;
    for(let i = 1; i <= nr; i++ ){
        message = i.toString();
        if(i % 11 === 0 && rule[3] == 'yes'){
            message = "Bong";
        }
        else{
            if(i % 3 === 0 && rule[0] == 'yes'){
                message = "Fizz";
            }
            if(i % 5 === 0 && rule[1] == 'yes'){
                if(message === i.toString()){
                    message = "Buzz";
                }
                else
                    message = message.concat("Buzz");
            }
            if(i % 7 === 0 && rule[2] == 'yes'){
                if(message === i.toString()){
                    message = "Bang";
                }
                else
                    message = message.concat("Bang");
            }
        }
        if(i % 13 === 0 && rule[4] == 'yes'){
            if(message === i.toString()){
                message = "Fezz";
            }
            else
                message = fezz(message);
        }
        if(i % 17 === 0 && rule[5] == 'yes'){
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

let rule:string[] = [];

async function rules(){
    rl.question("Write a number: ", (userInput: string) => {
        const maxNr = Number(userInput);
        rl.question("Fizz rule (yes/ no): ", (ruleUserInput: string) => {
            rule[0] = ruleUserInput;
            rl.question("Buzz rule (yes/ no): ", (ruleUserInput: string) => {
                rule[1] = ruleUserInput;
                rl.question("Bang rule (yes/ no): ", (ruleUserInput: string) => {
                    rule[2] = ruleUserInput;
                    rl.question("Bong rule (yes/ no): ", (ruleUserInput: string) => {
                        rule[3] = ruleUserInput;
                        rl.question("Fezz rule (yes/ no): ", (ruleUserInput: string) => {
                            rule[4] = ruleUserInput;
                            rl.question("Reverse rule (yes/ no): ", (ruleUserInput: string) => {
                                rule[5] = ruleUserInput;
                                fizzbuzz(maxNr,rule);
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
}

rules();
//
// rl.question("Write a maximum number: ", number =>{
//     fizzbuzz(number);
//     rl.close();
// });
