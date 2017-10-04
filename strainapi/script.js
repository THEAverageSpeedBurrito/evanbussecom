(function() {

}())

function newKey() {
  var name = $('#key-name').val()
  var email = $('#key-email').val()

  console.log(name, email);

  if(name && email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email.match(pattern)){
      // $.post('http://strainapi.evanbusse.com/newkey', {name: name, email: email}, (response) => {
      //     console.log(response);
      //   })

      $.ajax({
        type: 'POST',
        url: 'http://strainapi.evanbusse.com/newkey',
        data: JSON.stringify({name: name, email: email}),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          console.log(data);
        },
        error: function(error) {
          alert('There was an error adding your information to the database and retrieving an API key. Please try again later.')
        }
      })
    }else{
      alert('Invalid email')
    }
  }else{
    if(!name && !email){
      alert('You must enter your information to get an API key')
    }else if(!name){
      alert('You need to provide a name')
    }else if(!email){
      alert('You need to provide a valid email address')
    }
  }
}
