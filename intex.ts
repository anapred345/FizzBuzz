// This is our main function
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

function fizzbuzz(): void {
    let message: string;
    for(let i = 1; i <= 455; i++ ){
        message = i.toString();
         if(i % 11 === 0){
             message = "Bong";
             if(i % 13 === 0){
                 message = fezz(message);
             }
         }
         else if(i % 3 === 0){
             message = "Fizz";
            if(i % 5 === 0){
                message = message.concat("Buzz");
            }
             if(i % 7 === 0){
                 message = message.concat("Bang");
             }
             if(i % 13 === 0){
                 message = fezz(message);
             }
        }
        else if(i % 5 === 0){
             message = "Buzz"
             if(i % 7 === 0){
                 message = message.concat("Bang");
                 if(i % 13 === 0)
                     message = fezz(message);
             }
        }
        else if(i % 7 === 0){
            message = "Bang";
                 if(i % 13 === 0)
                     message = fezz(message);
        }
        else if(i % 13 === 0){
            message = "Fezz";
         }
        console.log(message);
    }
}

// Now, we run the main function:
fizzbuzz();