function me(){
	document.getElementById("me").style.display="block";
	document.getElementById("site").style.display="none";
	document.getElementById("ffb").style.display="none";
}
function site(){
	document.getElementById("site").style.display="block";
	document.getElementById("me").style.display="none";
	document.getElementById("ffb").style.display="none";
}
function ffb(){
	document.getElementById("site").style.display="none";
	document.getElementById("me").style.display="none";
	document.getElementById("ffb").style.display="block";
}		

function fmdownload()
{
	document.getElementById("fm").classList.add("active");
	document.getElementById("fm").innerHTML="Thank You";
 setTimeout(function(){
	document.getElementById("fm").classList.remove("active");
	var str = document.getElementById("fm").innerHTML;
	var rep = str.replace("Thank You", "<span class='fa fa-download'></span> Download");
	document.getElementById("fm").innerHTML=rep;
}, 6000);
}
function bmdownload()
{
	document.getElementById("bm").classList.add("active");
	document.getElementById("bm").innerHTML="Thank You";
 setTimeout(function(){
	document.getElementById("bm").classList.remove("active");
	var str = document.getElementById("bm").innerHTML;
	var rep = str.replace("Thank You", "<span class='fa fa-download'></span> Download");
	document.getElementById("bm").innerHTML=rep;
}, 6000);
}

function bkdownload()
{
	document.getElementById("bk").classList.add("active");
	document.getElementById("bk").innerHTML="Thank You";
 setTimeout(function(){
	document.getElementById("bk").classList.remove("active");
	var str = document.getElementById("bk").innerHTML;
	var rep = str.replace("Thank You", "<span class='fa fa-download'></span> Download");
	document.getElementById("bk").innerHTML=rep;
}, 6000);
}
function fsdownload()
{
	document.getElementById("fs").classList.add("active");
	document.getElementById("fs").innerHTML="Thank You";
 setTimeout(function(){
	document.getElementById("fs").classList.remove("active");
	var str = document.getElementById("fs").innerHTML;
	var rep = str.replace("Thank You", "<span class='fa fa-download'></span> Download");
	document.getElementById("fs").innerHTML=rep;
}, 6000);
}
function copytextg(containerid) {
document.getElementById("gtext").classList.add("active");
	document.getElementById("gtext").innerHTML="Paste";
 setTimeout(function(){
	document.getElementById("gtext").classList.remove("active");
	var str = document.getElementById("gtext").innerHTML;
	var rep = str.replace("Paste", "<span class='fa fa-copy'></span> Copy");
	document.getElementById("gtext").innerHTML=rep;
}, 6000);
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
function copytextm(containerid) {
document.getElementById("mtext").classList.add("active");
	document.getElementById("mtext").innerHTML="Paste";
 setTimeout(function(){
	document.getElementById("mtext").classList.remove("active");
	var str = document.getElementById("mtext").innerHTML;
	var rep = str.replace("Paste", "<span class='fa fa-copy'></span> Copy");
	document.getElementById("mtext").innerHTML=rep;
}, 6000);
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
function syntaxHighlights() {
    var colorhtml = document.getElementsByClassName("code");
    for(var i=0; i < colorhtml.length; i++){
        var data = colorhtml[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-quot">&quot;</span><span class="code-str">$1</span><span class="code-quot">&quot;</span>');
        data = data.replace(/&lt;([b-zB-Z0-9]+)(.*?)&gt;/g, '<span class="code-elem">&lt;$1$2&gt;</span>');
        data = data.replace(/&lt;\/\:?([b-zB-Z0-9]+)(.*?)&gt;/g, '<span class="code-elem">&lt;/$1$2</span>&gt;');
        data = data.replace(/ ([b-zB-Z0-9]+)=/g, '<span class="code-att"> $1</span><span class="code-equ">=</span>');
        data = data.replace(/&gt;/g, '<span class="code-sign">&gt;</span>');
        data = data.replace(/&lt;/g, '<span class="code-sign">&lt;</span>');
        colorhtml[i].innerHTML = data;
    }
}
window.addEventListener("load", syntaxHighlights);
