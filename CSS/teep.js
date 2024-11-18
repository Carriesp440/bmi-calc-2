const amount = document.getElementById('amount').value;
const persons = document.getElementById('persons').value;
const services = document.getElementById('services').value;
const calculate = document.getElementById('calculate');
const tip = document.getElementById('tip');
total = (amount*services)/persons;






calculate.addEventListener('click', () => {
    if( amount === '' && services === 'select' ) {
        alert("please enter valid values");
        return;
    }

    if(persons ==='1') {
        document.getElementById('each').style.display='none';
        return(total);

    }
        
    else {
        each.style.display='block';
    }
        

    if (calculate === 'total') {
        tip.style.display='block';
        
    }

    document.getElementById('total').innerHTML='total';
    
    total: total.toFixed(2)
    return(total);

});

console.log();








