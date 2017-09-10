(function() {

}())

function newKey() {
  console.log('getting new key');
  var name = prompt('Enter your name:')
  var email = prompt('Enter your email: ')

  while (name === ''){
    name = prompt('Enter your name:')
  }

  while(email === ''){
    email = prompt('Enter your email:')
  }

  console.log(name, email);

  if(name !== '' && email !== '') {
    $.post('http://thestrainapi.redirectme.net:4200/newkey', {name: name, email: email}, (response) => {
      console.log(response);
    })

  }else{
    alert('Information invalid. Please try again')
  }
}
