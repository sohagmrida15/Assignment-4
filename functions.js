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
}



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
}


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



function password(obj){
    const siteName = obj.siteName;
    const birthYear = obj.birthYear;
    const name = obj.name;
    if(siteName == undefined || birthYear == undefined || name == undefined || birthYear.toString().length !== 4 ){
        return "invalid";
    }
    else{
        const siteNameUpperCase = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const result = siteNameUpperCase + "#" + name + "@" + birthYear;
        return result; 
    }
}


function monthlySavings(arr , livingCost){
    if(!Array.isArray(arr) || isNaN(livingCost)){
        return "invalid input";
    }
    else{
        const allPayments = arr;
        let tax = 0;
        let totalIncome = 0;
        for(let payment of allPayments){
            totalIncome += payment;
            if(payment >= 3000){
                tax = (tax + (payment * 20) / 100);
            }
        }
        const totalSavings = totalIncome - tax - livingCost;
        if(totalSavings >= 0){
            return totalSavings;
        }
        else{
            return "Earn More";
        }
    }   
}
