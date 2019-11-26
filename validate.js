function validate()
{	//JavaScript gets access to to the HTML element with the id txtName
	//and calls it name
	var name = document.getElementById("txtName").value;

	//if the length of the string value is 0,
	//it means the user has entered no value:
	if (name.length == 0)
	{	alert("Please enter your name");
		return false;
	}

	//JavaScript gets access to to the HTML element with the id txtEmail
	//and calls it email
	var email = document.getElementById("txtEmail").value;

	//still check user entered a value
	if (email.length == 0)
	{	alert("Please enter an email address");
		return false;
	}

	//if the index position of the @  or . characters
	//is -1 (any value bigger than this, including 0,
	//means the character is present)
	else if (email.indexOf("@") == -1 || email.indexOf(".") == -1)
	{	alert("Please enter a valid email address");
		return false;
	}

	alert("Thank you, " + name);
}
