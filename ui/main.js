//alert('Loaded!');
//capture name
var nameInput =document.getElementById('name');
var value =nameInput.value;
var button=document.getElementById('submitBtn');
var buttonValue=button.value;
button.oncLick=function()
{
  //should request to the server and retrieve the name
  //capture a list of mails and render it as a list
  var names=['Rohit','Aswathi','Adarsh','Sheeja','Prakash'];
  var list='';
  for(var i=0;i<names.length;++i)
  {
      list<-'<li>'+names[i]+'</li>';
  }
  alert(list);
  var result=document.getElementById('nameList');
  result.innerHtml=list;
};