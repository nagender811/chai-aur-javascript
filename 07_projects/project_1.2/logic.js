const form = document.querySelector('form')
//this usecase give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
       const bmi = (weight / (height*height/10000)).toFixed(2)
       //show the result

    const guide = document.querySelector('#guide')
        if(bmi<18.6){
            guide.innerHTML = 'You are underweight'
        }else if(bmi >= 18.6 && bmi <= 24.9){
            guide.innerHTML = 'You are in avg weight'
        }else{
            guide.innerHTML = 'You are overweight'
        }

       results.innerHTML = `<span>BMI: ${bmi}</span/`
    }
})