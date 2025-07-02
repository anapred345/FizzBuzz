// This is our main function

function fizzbuzz(): void {
    let message: string;
    for(let i = 1; i <= 100; i++ ){
        message = i.toString();
         if(i % 11 === 0){
             message = "Bong";
         }
         else if(i % 3 === 0){
             message = "Fizz";
            if(i % 5 === 0){
                message = message.concat("Buzz");
            }
             if(i % 7 === 0){
                 message = message.concat("Bang");
             }
        }
        else if(i % 5 === 0){
             message = "Buzz"
             if(i % 7 === 0){
                 message = message.concat("Bang");
             }
        }
        else if(i % 7 === 0){
            message = "Bang";
        }
        console.log(message);
    }
}

// Now, we run the main function:
fizzbuzz();