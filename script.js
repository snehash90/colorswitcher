console.log('Hello!');

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (evt) {
    //console.log(evt);
    //console.log(evt.target);
    if (evt.target.id === 'grey') {
      console.log(evt.target.id);
      body.style.backgroundColor = evt.target.id;
    }
    if (evt.target.id === 'white') {
      console.log(evt.target.id);
      body.style.backgroundColor = evt.target.id;
    }
    if (evt.target.id === 'blue') {
      console.log(evt.target.id);
      body.style.backgroundColor = evt.target.id;
    }
    if (evt.target.id === 'yellow') {
      console.log(evt.target.id);
      body.style.backgroundColor = evt.target.id;
    }
  });
});
