function namevalidation(idname, idmsg) {
    var e = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (e.value.length != 0) {
        m.innerHTML = "&nbsp;";
        m.style.visibility = "Hidden";
        blackcolor(idname);
        return true;
    }
    else {
        m.innerHTML = "Enter your Name";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
}

function emailvalidation(idname, idmsg) {
    var e = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    console.log(e.value);

    var regem = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if (regem.test(e.value)) {
        m.innerHTML = "&nbsp;";
        m.style.visibility = "Hidden";
        blackcolor(idname);
        return true;
    }
    else {
        m.innerHTML = "Enter a valid E-mail";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
}

function mobilevalidation(idname, idmsg) {
    var e = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (e.value.length == 10) {
        m.innerHTML = "&nbsp;";
        m.style.visibility = "Hidden";
        blackcolor(idname);
        return true;
    }
    else {
        m.innerHTML = "Enter valid Mobile No.";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
}

function passwordvalidation(idname, idmsg) {
    var p = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    var letters = /^[A-Za-z]+$/;

    if (p.value.length < 8) {
        m.innerHTML = "Enter atleast 8 Characters !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else if (p.value.length > 16) {
        m.innerHTML = "Maximum 16 Characters !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else if (p.value.match(letters)) {
        m.innerHTML = "Must be AlphaNumeric !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else {
        m.innerHTML = "&nbsp;";
        m.style.visibility = "Hidden";
        blackcolor(idname)
        return true;
    }
}

function cpasswordvalidation(idname, idname2, idmsg) {
    var p = document.getElementById(idname);
    var cp = document.getElementById(idname2);
    var m = document.getElementById(idmsg);

    if (p.value == cp.value) {
        m.innerHTML = "&nbsp;";
        m.style.visibility = "Hidden";
        blackcolor(idname2);
        return true;
    } else {
        m.innerHTML = "Password do not Match!";
        m.style.visibility = "visible";
        redcolor(idname2);
        return false;
    }
}

function userLoginValidate(idt1, idmsg1, idt2, idmsg2) {
    if (emailvalidation(idt1, idmsg1)) {
        if (passwordvalidation(idt2, idmsg2)) {
            return true;
        }
    }
    return false;
}

function userRegisterValidate(idt1, idmsg1, idt2, idmsg2, idt3, idmsg3, idt4, idmsg4, idt5, idmsg5) {
    if(namevalidation(idt1, idmsg1)) {
        if (emailvalidation(idt2, idmsg2)) {
            if (mobilevalidation(idt3, idmsg3)) {
                if (passwordvalidation(idt4, idmsg4)) {
                    if (cpasswordvalidation(idt4, idt5, idmsg5)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function redcolor(str) {
    document.getElementById(str).style = "border: 3px solid red !important;";
}

function blackcolor(str) {
    document.getElementById(str).style = "border: 3px solid black !important;";
}