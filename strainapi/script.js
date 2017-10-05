(function() {

  if(localStorage.getItem('apikey')){
    // refresh localstorage to prolong life
    var key = localStorage.getItem('apikey')
    localStorage.setItem('apikey', key)

    $('#getting-started').empty().append(`<center><p>Your api key: <strong>${key}</strong></p></center>`)
  }

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
          if(window.localStorage){
            localStorage.setItem('apikey', data)
            window.location.href = './index.html'
          }else{
            alert('Your browser does not support localstorage so here is your api key: ' + data + ' Keep it in a safe place.')
          }
        },
        error: function(error) {
          alert('There was an error adding your information to the database and retrieving an API key. Error: ' + error)
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
