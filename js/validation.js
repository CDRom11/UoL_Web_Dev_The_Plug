function testEmailAddress(email) 
{
	if (email == "") 
	{
		return false;
	}
	
	var atPos = email.indexOf("@",1);// make sure that email contains an "@" symbol
	if (atPos == -1) 
	{
		return false;
	}
	
	if (email.indexOf("@",atPos+1) != -1) 
	{	// make sure that the email contains only one "@" symbol
		return false;
	}
	
	var periodPos = email.indexOf(".",atPos);
	if (periodPos == -1) 
	{					// and at least one "." after the "@"
		return false;
	}
	if (periodPos+3 > email.length)	
	{		// must be at least 2 characters after the "."
		return false;
	}
			
	return true;
}


function validateForm(formData)
{
	event.preventDefault();
	
	//get the value from the form
	var firstName = formData.firstName.value;
	var email = formData.email.value;
	var subject = formData.subject.value;
	var description = formData.description.value;
	
	//do validation
	var errorCount = 0;
	if(firstName=="" || firstName==null)
	{
		document.getElementById('error1').innerHTML="You must enter a name";
		errorCount++;
	}
	else
	{
		document.getElementById('error1').innerHTML="";
	}
	
	if(subject=="" || subject==null)
	{
		document.getElementById('error3').innerHTML="You must enter subject title";
		errorCount++;
	}
	else
	{
		document.getElementById('error3').innerHTML="";
	}
	
	
	if(description=="" || description==null)
	{
		document.getElementById('error4').innerHTML="You must enter a message";
		errorCount++;
	}
	else
	{
		document.getElementById('error4').innerHTML="";
	}
	
	if(email=="" || email==null)
	{
		document.getElementById('error2').innerHTML="You must enter an email account";
		errorCount++;
	}
	else if(testEmailAddress(email)==false)
	{
		document.getElementById('error2').innerHTML="Please enter a valid email address";
		errorCount++;
	}
	else{
		document.getElementById('error2').innerHTML="";
	}
	
	//do not type after this
	if(errorCount==0)
	{
		return false;
	}
	else
	{
		return true;
	}
	
	
	
	return false;
}

function reset(formData){
	document.getElementById('error1').innerHTML="";
	document.getElementById('error2').innerHTML="";
	document.getElementById('error3').innerHTML="";
	document.getElementById('error4').innerHTML="";
}