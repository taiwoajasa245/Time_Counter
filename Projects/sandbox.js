               
                             
const clock = document.querySelector('h1'); 

setInterval(() => {
  const date = new Date();   
  
  clock.innerHTML = date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds(); 

}, 1000);


// generate random numbers between 0 and 1 and multiply these number by our specified range and use math.floor to round up to the nearest whole number.

const getRandomNumber = maxNum => { 
  return Math.floor(Math.random() * maxNum);
}; 

// then use the getRadomNumber  function to generate random values for our hsl notation 

const getRandomColor = () => { 
  const h = getRandomNumber(360); 
  const s = getRandomNumber(100); 
  const l = getRandomNumber(100); 

  return `hsl(${h}deg, ${s}%, ${l}%)`; 

};

const getRandomBlackColor = () => { 
  const h = getRandomNumber(360);

  return `hsl(${h}deg, 5%, 10%)`;

}
const getRandoColor = () => { 
  const h = getRandomNumber(360);

  return `hsl(${h}deg, 10%, 50%)`;

}

// then we pass the random generated color to our background element
const setBackgroundColor = () => { 
  const randomColor = getRandomColor(); 
  const random = getRandomBlackColor();
  const rando = getRandoColor();
  const background = document.querySelector('#background');
  background.style.backgroundColor = rando;
  background.style.color = random;  
  
}



setInterval(() => {
  setBackgroundColor()
}, 1000);