	      
             function valid()
            {
                    var name = document.getElementById("name").value;
                    var email = document.getElementById("email").value;
                    var comment =document.getElementById("comment").value;
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    var namereg = /^[a-zA-Z ]{2,30}$/;
                
                    if(name == '' || name == null || email == '' || email == null || comment == '' || comment == null)
                    {
                        alert("All Fields are mandatory");
                        return false;
                    }                
                    else if(!name.match(namereg)){
                        alert("Enter a valid name");                    
                    }
                    else if(!email.match(emailReg)) 
                    {
                        alert("Enter a valid Email Address")
                    }                
	    }
