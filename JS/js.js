	var screenwidth=document.body.clientWidth;
	var screenheight=document.documentElement.clientHeight;
	document.getElementById("box").style.width=screenwidth+"px";
	document.getElementById("box").style.height=screenheight+"px";
	document.getElementById("logo").style.left=0.04*screenwidth+"px";
	document.getElementById("logo").style.top=0.05*screenheight+"px";
	document.getElementById("logo").style.width=screenwidth/5+"px";
	document.getElementById("logo").style.height=screenheight/10+"px";
	for(var i=0;i<2;i++){
		document.getElementsByClassName("shouye")[i].style.width=screenwidth+"px";
		document.getElementsByClassName("shouye")[i].style.height=screenheight+"px";
	}
		document.getElementsByClassName("shouye")[2].style.width=0.81*screenwidth+"px";
		document.getElementsByClassName("shouye")[2].style.height=screenheight+"px";
	for(var i=0;i<2;i++){
		document.getElementsByClassName("shouye")[2-i].style.marginLeft=screenwidth*(2-i)+"px";
	}
	for(var i=0;i<4;i++){
		document.getElementsByClassName("select")[i].style.width=0.2*screenwidth+"px";
		document.getElementsByClassName("select")[i].style.height=0.25*screenheight+"px";
		document.getElementsByClassName("select")[i].style.left=((i+1)*0.04*screenwidth+i*0.2*screenwidth)+"px";
		document.getElementsByClassName("select")[i].style.top=screenheight*0.5+"px";
	}
	document.getElementById("tuijian").style.top=0.15*screenheight+"px";
	document.getElementById("tuijian").style.height=0.05*screenheight+"px";
	document.getElementById("tuijian").style.width=0.1*screenwidth+"px";
	document.getElementById("tuijian").style.left=0.01*screenwidth+"px";
	document.getElementById("geren").style.top=0.15*screenheight+"px";
	document.getElementById("geren").style.height=0.05*screenheight+"px";
	document.getElementById("geren").style.width=0.1*screenwidth+"px";
	document.getElementById("geren").style.left=0.01*screenwidth+"px";
	document.getElementById("big").style.width=0.39*screenwidth+"px";
	document.getElementById("big").style.height=0.365*screenheight+"px";
	document.getElementById("big").style.top=0.2*screenheight+"px";
	document.getElementById("big").style.left=0.01*screenwidth+"px";
	document.getElementById("footer").style.width=screenheight+"px";
	document.getElementById("login").style.height=screenheight+"px";
	document.getElementById("login").style.width=0.2*screenwidth+"px";
	document.getElementById("login").style.left=screenwidth+"px";
	document.getElementById("zhuce").style.height=screenheight+"px";
	document.getElementById("zhuce").style.width=0.2*screenwidth+"px";
	document.getElementById("zhuce").style.left=screenwidth+"px";
	for(var i=1;i<12;i++){
		if(i<4){
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.17*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=(i+2)*0.01*screenwidth+(i+1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.2*screenheight+"px";
		}
		if(i>=4&&i<7){
			var num=i-3;
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.17*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=(num+2)*0.01*screenwidth+(num+1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.395*screenheight+"px";
		}
		if(i>=7){
			var num=i-6;
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.17*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=num*0.01*screenwidth+(num-1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.59*screenheight+"px";
		}
	}
	for(var i=0;i<4;i++){
		document.getElementsByClassName("menu")[i].style.width=0.15*screenwidth+"px";
		document.getElementsByClassName("menu")[i].style.height=0.17*screenheight+"px";
		document.getElementsByClassName("menu")[i].style.left=(i+1)*0.01*screenwidth+0.19*(i)*screenwidth+"px";
		document.getElementsByClassName("menu")[i].style.top=0.2*screenheight+"px";
	}
	document.getElementById("display").style.width=0+"px";
	document.getElementById("display").style.height=0+"px";
	document.getElementById("display").style.width=screenwidth+"px";
	document.getElementById("display").style.height=screenheight+"px";
	document.getElementById("footer").style.top=(screenheight-100)+"px";
	document.getElementById("footer").style.width=screenwidth+"px";
	








window.onresize = function reset(){
	var screenwidth=document.body.clientWidth;
	var screenheight=document.documentElement.clientHeight;
	document.getElementById("box").style.width=screenwidth+"px";
	document.getElementById("box").style.height=screenheight+"px";
	document.getElementById("logo").style.left=0.04*screenwidth+"px";
	document.getElementById("logo").style.top=0.05*screenheight+"px";
	document.getElementById("logo").style.width=screenwidth/5+"px";
	document.getElementById("logo").style.height=screenheight/10+"px";
	for(var i=0;i<2;i++){
		document.getElementsByClassName("shouye")[i].style.width=screenwidth+"px";
		document.getElementsByClassName("shouye")[i].style.height=screenheight+"px";
	}
		document.getElementsByClassName("shouye")[2].style.width=0.81*screenwidth+"px";
		document.getElementsByClassName("shouye")[2].style.height=screenheight+"px";
	for(var i=0;i<2;i++){
		document.getElementsByClassName("shouye")[2-i].style.marginLeft=screenwidth*(2-i)+"px";
	}
	for(var i=0;i<4;i++){
		document.getElementsByClassName("select")[i].style.width=0.2*screenwidth+"px";
		document.getElementsByClassName("select")[i].style.height=0.25*screenheight+"px";
		document.getElementsByClassName("select")[i].style.left=((i+1)*0.04*screenwidth+i*0.2*screenwidth)+"px";
		document.getElementsByClassName("select")[i].style.top=screenheight*0.5+"px";
	}
	document.getElementById("tuijian").style.top=0.15*screenheight+"px";
	document.getElementById("tuijian").style.height=0.05*screenheight+"px";
	document.getElementById("tuijian").style.width=0.1*screenwidth+"px";
	document.getElementById("tuijian").style.left=0.01*screenwidth+"px";
	document.getElementById("big").style.width=0.39*screenwidth+"px";
	document.getElementById("big").style.height=0.365*screenheight+"px";
	document.getElementById("big").style.top=0.2*screenheight+"px";
	document.getElementById("big").style.left=0.01*screenwidth+"px";
	document.getElementById("footer").style.width=screenheight+"px";
	for(var i=1;i<12;i++){
		if(i<4){
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.17*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=(i+2)*0.01*screenwidth+(i+1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.2*screenheight+"px";
		}
		if(i>=4&&i<7){
			var num=i-3;
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.17*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=(num+2)*0.01*screenwidth+(num+1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.395*screenheight+"px";
		}
		if(i>=7){
			var num=i-6;
			document.getElementsByClassName("picture")[i].style.width=0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.height=0.16*screenheight+"px";
			document.getElementsByClassName("picture")[i].style.left=num*0.01*screenwidth+(num-1)*0.19*screenwidth+"px";
			document.getElementsByClassName("picture")[i].style.top=0.59*screenheight+"px";
		}
	}
	for(var i=0;i<4;i++){
		document.getElementsByClassName("menu")[i].style.width=0.19*screenwidth+"px";
		document.getElementsByClassName("menu")[i].style.height=0.20*screenheight+"px";
		document.getElementsByClassName("menu")[i].style.left=(i+1)*0.01*screenwidth+0.19*(i)*screenwidth+"px";
		document.getElementsByClassName("menu")[i].style.top=0.2*screenheight+"px";
	}
	document.getElementById("display").style.width=0+"px";
	document.getElementById("display").style.height=0+"px";
	document.getElementById("display").style.width=screenwidth+"px";
	document.getElementById("display").style.height=screenheight+"px";
	document.getElementById("footer").style.top=(screenheight-100)+"px";
	document.getElementById("footer").style.width=screenwidth+"px";


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
	var num=0;
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
function downloadFile(event) { 
		var display=document.getElementById("display");
		var computedStyle3=document.defaultView.getComputedStyle(display,null); 
	    var url=computedStyle3.backgroundImage;  
	  	url = url.substring(35,url.length-1);
	  	url =".."+url;
	  	alert(url);
        var elemIF = document.createElement("iframe");  
        elemIF.src=null;
            alert(elemIF.src); 
            elemIF.src = url;   
            elemIF.style.display = "none";   
            document.body.appendChild(elemIF);   
    	    event.stopPropagation();
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