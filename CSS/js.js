




function calculateBMI() {
    const amount = document.getElementById('amount').value;
    const services = document.getElementById('services').value;
    const persons = document.getElementById('persons').value;

    const share = ((amount * services) / persons);

    const tip = document.getElementById('tip');
    const each = document.getElementById('each');


    document.getElementById('tip').innerHTML = 'TIP :'
    document.getElementById('total').innerHTML = share.toFixed(2)
    
    if (persons === '' && services === ''){
        return('enter valid values');
    }

    if (persons = 1){
        document.getElementById('each').style.display = 'none';

    }

    else if (persons > 1){
        document.getElementById('each').style.display = 'block';
    }

    else {
        
        document.getElementById('total').style.display = 'block';
        document.getElementById('tip').style.display = 'block'
    }
}

function reload() {
    window.location.reload()
}