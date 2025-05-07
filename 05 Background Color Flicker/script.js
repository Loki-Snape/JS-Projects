const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervelID
const start = function(){
  if(!intervelID){
    intervelID = setInterval(change, 400);
  }
  function change(){
    document.body.style.backgroundColor = randomColor();
  }
}
const stop = function(){
  clearInterval(intervelID);
  intervelID = null;
}
document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);