function changeToMobileNum(){
	var MobileNum=document.getElementById("MobileNum").className = "text-c fw-bold font-size-16 active";
	var Username=document.getElementById("Username").className = "text-c fw-bold font-size-16";

	var MobileLoginShow=document.getElementById("mobile_login");
	mobile_login.style.display="block";
	var UsernameLoginHide=document.getElementById("username_login");
	username_login.style.display="block";
}

function changeToUsername(){
	var Username=document.getElementById("Username").className = "text-c fw-bold font-size-16 active";
	var MobileNum=document.getElementById("MobileNum").className = "text-c fw-bold font-size-16";

	var MobileLoginHide=document.getElementById("mobile_login");
	mobile_login.style.display="block";
	var UsernameLoginShow=document.getElementById("username_login");
	username_login.style.display="block";
}

