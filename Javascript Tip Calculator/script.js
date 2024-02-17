let Calculate = document.querySelector('#Calculate').onclick = Calculate;

Calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

//validate
if(totalBill === '' || tipPercent == 0 || split == 0){
    alert('Please enter amount');
    return;
}

//calculate

let total = (totalBill * tipPercent) / split;
total = total.toFixed(2);

document.getElementById('tip').innerHTML = totalBill;
})