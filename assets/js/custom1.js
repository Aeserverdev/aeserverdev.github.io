
function getXMLHttp(){
  var xmlHttp
  try
  {
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

function getAjaxHttp(e, p){
		$.ajax({
		  type: "POST",
		  url: "/member/index.html",
		  data: { 'email': e, 'pwd' : p },
		  statusCode: {
					200: function(jqXHR) {
					  alert( "Fail" );
					  jqXHR.prop = "Auth Fail";
					},
					302: function() {
					  alert( "Success" );
					},
					
				  },
			
			
		})
		  .done(function( msg, stat, jqXHR ) {
			  console.log(jqXHR.prop);
			  
			  getValue = $("#authenticationFailed").html();
			  alert(getValue);
			//alert( "Submitted!" );
			//alert(Context.Response.StatusCode);
				/*if (Context.Response.StatusCode == 302){
					alert('302 Failed');
				} else if(Context.Response.StatusCode == 200) {
					alert('200 Passed!');
				} else {
				}*/
				
		  });
		
}



function validateEmail(email) { 
	if(email == ''){ 
		return false; 
	}
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function logUser(email, password){
	if (validateEmail(email)) {
		if(password.length < 5 || password.length > 16){ 
			alert('Passwords must be 5 to 16 characters long and may contain only alphabets (a-z) and numbers (0-9).');
			return false;
		}
	}
		getAjaxHttp(email, password);
		/*var xmlHttp = getXMLHttp();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4){
				handleLogUser(xmlHttp.responseText, email);
			}
		}
		xmlHttp.open("GET", "http://www.yourwebsite.com/log_user.php?e="+email+"&p="+password, true);
		xmlHttp.send(null);
	} else {
		alert('Your email is not valid.');
	}*/
	
}  
		
function handleLogUser(response, email, password){
	if(response == 'true'){
		console.log('User has successfully login.');
	}else{
		console.log('Your credentials are incorrect.');
	}
} 

function LoginBox(){
	$('.body').prepend('<div class="login" ><div class="title">User Login</div><input value="" class="username" autocapitalize="off" type="text" placeholder="username"/><input value="" class="password" autocapitalize="off" type="password" placeholder="password"/><button class="go">Login to your account</button></div>');
}

function adjust(){
	var marginTop = (($('body').height() - $('.login').height())-100)/2;
	var marginLeft = (($('body').width() - $('.login').width())-100)/2;
	$('.login').css({'left': marginLeft, 'top': marginTop });
}

$(window).load(function() {
	var loginbox1 = new LoginBox;
	adjust();
	$('button').click(function(){
			logUser( $(this).closest('.login').children('.username').val(), $(this).closest('.login').children('.password').val() );
	})
});


$( window ).resize(function() {
	adjust();
});
function login(){
	logUser($('.username').value, $('.password').value);
}
