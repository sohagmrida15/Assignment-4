function calculateMoney(ticketSale){
    const ticketSaleTk = ticketSale * 120;
    const staffLunchBill = 50 * 8;
    const guardBill = 500;
    const totalCost = staffLunchBill + guardBill;
    const income = ticketSaleTk - totalCost;
    if (ticketSale >= 0){
        return income;
    }
    else{
        return "Invalid Number";
    }
};
// console.log(calculateMoney(10));


function checkName(name){
    const goodLetters = ['a', 'A', 'y', 'Y', 'i','I', 'e', 'E' , 'o', 'O' , 'u', 'U', 'w', 'W'];
    if(typeof name === "string"){
        const lastLetter = name.slice(-1);
        if(goodLetters.includes(lastLetter)){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }

};
// console.log(checkName(2));


function deleteInvalids(array){
    if(Array.isArray(array)){
        let numbers = [];
        for (let element of array){
            if(Number.isFinite(element)){
                numbers.push(element);
            }
        }
        return numbers;
    }
    else{
        return "Invalid Array";
    }
}
// const test = {num: [ 1 , 2 , 3 ]};
// console.log(deleteInvalids(test));