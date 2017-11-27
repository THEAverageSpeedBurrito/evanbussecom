(function() {

  $.get('http://strainapi.evanbusse.com/test').fail(() => {
    $('.status-circle').addClass('down')
  })

  if(localStorage.getItem('apikey')){
    // refresh localstorage to prolong life
    var key = localStorage.getItem('apikey')
    localStorage.setItem('apikey', key)

    $('.info-key').css('opacity', 1)
    $('#api-key').text(key)
    $('#newkey').attr('disabled', 'disabled')
  }

}())

function newKey() {
  var name = $('#key-name').val()
  var email = $('#key-email').val()

  if(name && email) {
    var pattern = /^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email.match(pattern)){

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
          console.log(error.responseText);
          alert(error.responseText)
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

function lostKey() {
  var email = $('#key-email').val()

  if(email) {
    $.ajax({
      type: 'GET',
      url: `http://strainapi.evanbusse.com/lostkey/${email}`,
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        if(window.localStorage){
          localStorage.setItem('apikey', data.key)
          window.location.href = './index.html'
        }else{
          alert('Your browser does not support localstorage so here is your api key: ' + data + ' Keep it in a safe place.')
        }
      },
      error: function(error) {
        console.log(error.responseText);
        alert(error.responseText)
      }
    })
  }else{
    alert('You need to provide a valid email address that has already been used to register.')
  }
}
