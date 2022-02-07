


let x = 0
let y = 1
let z = 0
let rebirth = 1
update()
if(localStorage.getItem('x')){
  x = Number(localStorage.getItem('x'));
}
if(localStorage.getItem('rebirth')){
  rebirth = Number(localStorage.getItem('rebirth'));
}
if(localStorage.getItem('y')){
  y = Number(localStorage.getItem('y'));
}
if(localStorage.getItem('z')){
  z = Number(localStorage.getItem('z'));
}
update()
//sets the money display and money button
function update() {
  document.getElementById('money').innerHTML = x;
  document.getElementById('getmoney').innerHTML = 'click to get ' + y*rebirth + ' money';
}


function roundDown(number, decimals) {
  decimals = decimals || 0;
  return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
}

function autoclicker(){
  setInterval(function(){
    if(z >= 1){
      x = x + y
      update()
      }
  }, 1000/z) 
}

function nan(){
  if(x !== x){
    rebirth = rebirth + 1;
    x = 0;
    y = 1;
    z = 0;
    update()
  }
}
setInterval(function(){
      localStorage.setItem('x',x);
      localStorage.setItem('y',y);
      localStorage.setItem('z',z);
      localStorage.setItem('rebirth',rebirth);
}, 1000) 
