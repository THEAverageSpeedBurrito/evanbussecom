(function() {

}())

function newKey() {
  console.log('getting new key');

  var name = $('#key-name').val()
  var email = $('#key-email').val()

  console.log(name, email);

  // if(name !== '' && email !== '') {
  //   $.post('http://strainapi.evanbusse.com/newkey', {name: name, email: email}, (response) => {
  //     console.log(response);
  //   })
  //
  // }else{
  //   alert('Information invalid. Please try again')
  // }
}
