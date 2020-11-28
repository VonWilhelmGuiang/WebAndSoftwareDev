const signupForm = document.getElementById("registerForm");
const reqField = document.getElementsByClassName("reqField");
const reqFieldLabel = document.getElementsByClassName("reqFieldLabel");
const formCont = document.getElementById("formCont");

//json
let signUpStatus;


//error var
const errorCont = document.getElementById("errorCont");
const errImg = document.getElementsByClassName("errorImg");
const sbmtErrField = document.getElementsByClassName("sbmtErrField");
const sbmtErr = document.getElementsByClassName("sbmtErr");
const sbmtErrUL = document.getElementsByClassName("sbmtErrUL");

//error trap for each input
function errorTrap(){ 
    let errorCntr = 0;
    for( let index = 0 ; index < reqField.length ; index++){
        if (reqField[index].value == ""){
            //show the main error container
            errorCont.style.display = "block";
            //fill the error field containers
            sbmtErrField[index].innerHTML = reqFieldLabel[index].textContent;
            sbmtErr[index].innerHTML = signUpStatus.error[0];
            //show the error field containers
            sbmtErrField[index].style.display = "block";
            sbmtErr[index].style.display = "list-item";
            sbmtErrUL[index].style.display = "block";
            errorCntr = 0;
        }
        else if (reqField[index].value != ""){
            //empty the error field containers
            sbmtErrField[index].innerHTML="";
            sbmtErr[index].innerHTML="";
            //hide the error field containers
            sbmtErrField[index].style.display = "none";
            sbmtErr[index].style.display = "none";
            sbmtErrUL[index].style.display = "none";
            errorCntr++;
        }
        // email validator
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(reqField[2].value) == false && reqField[2].value != ""){
            errorCont.style.display = "block";
            sbmtErrField[2].innerHTML = reqFieldLabel[2].textContent;
            sbmtErr[2].innerHTML = signUpStatus.error[1];
            sbmtErrField[2].style.display = "block";
            sbmtErr[2].style.display = "list-item";
            sbmtErrUL[2].style.display = "block";
            errorCntr = 0;
        }
        // success
        if (errorCntr == 4){
            errorCont.style.display = "none";
            formCont.innerHTML=signUpStatus.success;
        }
    }
}

//style trap for each input
for( let index = 0 ; index < reqField.length ; index++ ){
    reqField[index].addEventListener("input",()=>{
        if(reqField[index].value == "" ){
            reqField[index].classList.add("error");
            reqFieldLabel[index].classList.add("reqFieldLabelErr");
            errImg[index].style.visibility = "visible";
        }else{
            reqField[index].classList.remove("error");
            reqFieldLabel[index].classList.remove("reqFieldLabelErr");
            errImg[index].style.visibility = "hidden";
        }
    }); 
}


signupForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    window.scroll({
        top: 100, 
        left: 0, 
        behavior: 'smooth'
      });


    let xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const reponse = this.responseText;
            signUpStatus = JSON.parse(reponse);
        
            //error trap for each input
            errorTrap();
        }
    };

    xmlHttp.open("GET","../js/errors.json",true);
    xmlHttp.send();
});