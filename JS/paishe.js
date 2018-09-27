    var screenwidth=document.body.clientWidth;
	var screenheight=document.documentElement.clientHeight;
	document.getElementById("box").style.width=screenwidth+"px";
	document.getElementById("box").style.height=screenheight+"px";
	document.getElementById("logo").style.left=0.04*screenwidth+"px";
	document.getElementById("logo").style.top=0.05*screenheight+"px";
	document.getElementById("logo").style.width=screenwidth/3+"px";
	document.getElementById("logo").style.height=screenheight/10+"px";
	document.getElementById("display").style.width=0+"px";
	document.getElementById("display").style.height=0+"px";
	document.getElementById("display").style.width=screenwidth+"px";
	document.getElementById("display").style.height=screenheight+"px";
	document.getElementById("footer").style.top=(screenheight-100)+"px";
	document.getElementById("footer").style.width=screenwidth+"px";
	for(var i=0;i<2;i++){
		document.getElementsByClassName("shouye")[i].style.width=screenwidth+"px";
		document.getElementsByClassName("shouye")[i].style.height=screenheight+"px";
	}
	for(var i=0;i<1;i++){
		document.getElementsByClassName("shouye")[1-i].style.marginLeft=screenwidth*(1-i)+"px";
	}
	for(var i=0;i<8;i++){
		if(i<4){
			document.getElementsByClassName("picture")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=0.55*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.15*screenheight+0.01*i*screenheight+0.16*i*screenheight+"px";
		}
		if(i>=4){
			var num=i-4;
			document.getElementsByClassName("picture")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=0.76*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.15*screenheight+0.01*num*screenheight+0.16*num*screenheight+"px";
		}
	}
	for(var i=0;i<16;i++){
		if(i<4){
			document.getElementsByClassName("car")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("car")[i].style.left=0.02*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.top=0.15*screenheight+0.01*i*screenheight+0.16*i*screenheight+"px";
		}
		if(i>=4&&i<8){
			var num=i-4;
			document.getElementsByClassName("car")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("car")[i].style.left=0.23*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.top=0.15*screenheight+0.01*num*screenheight+0.16*num*screenheight+"px";
		}
		if(i>=8&&i<12){
			var num=i-8;
			document.getElementsByClassName("car")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("car")[i].style.left=0.55*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.top=0.15*screenheight+0.01*num*screenheight+0.16*num*screenheight+"px";
		}
		if(i>=12){
			var num=i-12;
			document.getElementsByClassName("car")[i].style.width=0.2*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("car")[i].style.left=0.76*screenwidth+"px";
			document.getElementsByClassName("car")[i].style.top=0.15*screenheight+0.01*num*screenheight+0.16*num*screenheight+"px";
		}
	}
	function display(id){
		var mydiv=document.getElementById(id);
		var computedStyle1=document.defaultView.getComputedStyle(mydiv,null);
		var display=document.getElementById("display");
		var computedStyle=document.defaultView.getComputedStyle(display,null);
		document.getElementById("display").style.width=screenwidth+"px";
		document.getElementById("display").style.height=screenheight+"px";
		document.getElementById("display").style.visibility="visible";
		document.getElementById("display").style.backgroundImage=computedStyle1.backgroundImage;
	}

	document.getElementById("down").style.top=screenheight+"px";
	var count=0;
	function apear(){
		count++;
		if(count%2==1)
			document.getElementById("down").style.top=(screenheight-100)+"px";
		else
			document.getElementById("down").style.top=screenheight+"px";
	}

	function back(){
		document.getElementById("display").style.width=0+"px";
		document.getElementById("display").style.height=0+"px";
		document.getElementById("display").style.visibility="hidden";
	}
function change(event,id){
		num++;
		if(num%2==1){
			var a=document.getElementById(id);
			a.style.backgroundImage="url(../PICTURE/red.png)";
			}
		else
			document.getElementById(id).style.backgroundImage="url(../PICTURE/white.png)";
		event.stopPropagation();
}
	function bg(){
		var a=document.getElementById("bg").src;
		document.getElementById("display").style.width=screenwidth+"px";
		document.getElementById("display").style.height=screenheight+"px";
		document.getElementById("display").style.visibility="visible";
		document.getElementById("display").style.backgroundImage="url("+a+")";
	}
 document.getElementById("login").style.height=screenheight+"px";
	document.getElementById("login").style.width=0.2*screenwidth+"px";
	document.getElementById("login").style.left=screenwidth+"px";
	document.getElementById("zhuce").style.height=screenheight+"px";
	document.getElementById("zhuce").style.width=0.2*screenwidth+"px";
	document.getElementById("zhuce").style.left=screenwidth+"px";
   	function back1(){
   		document.getElementById("login").style.left=screenwidth+"px";
   	}
   	function back2(){
   		document.getElementById("zhuce").style.left=screenwidth+"px";
   	}
	function login(){
   		document.getElementById("login").style.left=0.8*screenwidth+"px";
   	}
   	function zhuce(){
   		document.getElementById("zhuce").style.left=0.8*screenwidth+"px";
   	}