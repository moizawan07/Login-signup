var signUpData = [];
var LoginData = [];

function signUp (){

signUpData[0] = document.getElementById("Email1").value
signUpData[1] = document.getElementById("Pass1").value

   
// console.log(emailGet, passGet)

}

function logIn(){

    LoginData[0] = document.getElementById("Email2").value
    LoginData[1] = document.getElementById("Pass2").value
    

    if(signUpData[0] === LoginData[0] && signUpData[1] === LoginData[1]){
        alert("Login✔")
    }
    else if(signUpData[0] !== LoginData[0]){
        alert("Incorrect Email ⚠")
    }
    else if(signUpData[1] !== LoginData[1]){
        alert("Incorrect Pass ⚠")
    }

    else{
        alert("Enter Data")
    }
    
}






    // var ids = ["First name", "surname","Email1","Pass1"]
    
    // //   full signup page daata in this array
    
    // var SignUpData = []
    
    // function Signup(){
        
    
    //   for(var i = 0; i < ids.length; i++){ 
       
    //    SignUpData[i] = document.getElementById(ids[i]).value
    
       
    // }
    
    // }
    // console.log(SignUpData)
      
    // //   Ids Name Store in An Array Ang Get Ids value With The Help of Loop
    
    // // var ids2 = ["Email2", "Pass2"]
    
    // // //   full LogIn page daata in this array
    
    // // var LogInData = []
    
    // // function Login (){
    
    // //     for(var j = 0; j<ids2.length; j++){
    
    // //         LogInData[j] = document.getElementById(ids2[j]).value
    // //     }
    
    // //   console.log(LogInData)
    // // }
    