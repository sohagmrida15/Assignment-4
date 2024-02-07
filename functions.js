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
    const lastLetter = name.slice(-1);
    if(typeof name === "string"){
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
// Incomplete
// console.log(checkName("RAFEE"));

