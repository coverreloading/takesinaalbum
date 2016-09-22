// 加载jquery
var head= document.getElementsByTagName('head')[0];   
var script= document.createElement('script');   
script.type= 'text/javascript';   
script.src= 'http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js';   
head.appendChild(script);
// 没有标签的jpg
var str1 ="";
$(".m_photoItem.m_photoItem_a.phtItem_hv img").each(function(index){
	var str2 = $(this).attr("src").replace("small", "large");
	str1 += str2;
})
var str3 = str1.split(".jpg");
for (i=0;i<str3.length;i++) {
	str3[i]=str3[i]+".jpg"+"</br>";
	document.write(str3[i]);
}

// 有标签的jpg
var str1 ="";
var str1 ="";
$(".m_photoItem.m_photoItem_a.phtItem_hv img").each(function(index){
	var str2 = $(this).attr("src").replace("small", "large");
	str1 += str2;
})
var str3 = str1.split(".jpg");
//var alertstr;
for (i=0;i<str3.length;i++) {
	str3[i]="<div class=\"cell\"><a href=\""+str3[i]+".jpg \"target=\"_blank\"><img src=\""+str3[i].replace("large", "small")+".jpg\"></a><p></div>";
	document.write(str3[i]);
//	alertstr += str3[i];
}
//alert(alertstr);
alert($("body").html);