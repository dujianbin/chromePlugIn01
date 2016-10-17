/**
 * @author: dujianbin
 * Date: 16/10/2016
 */

window.onload = function(){  
	var a='';
    var list=document.getElementsByTagName("input");  
    var strData;  
    for(var i=0;i<list.length && list[i];i++)  
    {  
          
            strData=list[i];  
            chrome.runtime.sendMessage(strData.id);  
        	
    }  

  // document.getElementById("indexframe").contentDocument.getElementById("card").value = "152523198111060317";
  document.getElementById("kw").value = "13810814717";
  // document.getElementById("applyNum").value = "20161014001539";
}