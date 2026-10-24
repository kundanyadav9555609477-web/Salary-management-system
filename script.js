function calc(){
  let base = Number(document.getElementById('base').value);
  let hra = Number(document.getElementById('hra').value);
  let da = Number(document.getElementById('da').value);
  let bonus = Number(document.getElementById('bonus').value);
  let total = base + hra + da + bonus;
  document.getElementById('total').innerText = "₹ " + total.toLocaleString();
  document.getElementById('b1').innerText = base;
  document.getElementById('h1').innerText = hra;
  document.getElementById('d1').innerText = da;
  document.getElementById('bo1').innerText = bonus;
}