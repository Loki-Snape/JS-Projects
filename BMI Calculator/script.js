const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height. ${height} is not a valid input!`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height. ${weight} is not a valid input!`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    if(bmi < 18.5){
      results.innerHTML = `<span>${bmi}</span><br><p>Under Weight</p>`;
    }
    else if(bmi>=25){
      results.innerHTML = `<span>${bmi}</span><br><p>Overweight</p>`;
    }
    else{
      results.innerHTML = `<span>${bmi}</span><br><p>BMI in Normal Range</p>`;
    }
  }
})