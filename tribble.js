
// initial radio button form select

function displayForm(c){ 
    if(c.value == "1"){ 
        document.getElementById("bridgeform").style.visibility='visible'; 
        document.getElementById("relayform").style.visibility='hidden'; 
        document.getElementById("exitform").style.visibility='hidden'; 
        document.getElementById("onionform").style.visibility='hidden'; 
    } 
    else if(c.value =="2"){ 
        document.getElementById("bridgeform").style.visibility='hidden'; 
        document.getElementById("relayform").style.visibility='visible'; 
        document.getElementById("exitform").style.visibility='hidden'; 
        document.getElementById("onionform").style.visibility='hidden';     
    } 
    else if(c.value =="3"){ 
         document.getElementById("bridgeform").style.visibility='hidden'; 
        document.getElementById("relayform").style.visibility='hidden'; 
        document.getElementById("exitform").style.visibility='visible';
        document.getElementById("onionform").style.visibility='hidden'; 
   } 
    else if(c.value =="4"){
        document.getElementById("bridgeform").style.visibility='hidden'; 
        document.getElementById("relayform").style.visibility='hidden'; 
        document.getElementById("exitform").style.visibility='hidden'; 
        document.getElementById("onionform").style.visibility='visible'; 
    }
    else if(c.value =="5"){
        window.location.assign("https://glamrock.github.io/torrc/full.html");
    }

    else{
    }
}

