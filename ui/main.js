//alert('Loaded!');
//capture name
var nameInput =document.getElementById('name');
var value =nameInput.value;
var button=document.getElementById('submit');
var buttonValue=button.value;
button.onCLick=function()
{
  //should request to the server and retrieve the name
  //capture a list of mails and render it as a list
  var names=['Rohit','Aswathi','Adarsh','Sheeja','Prakash'];
  var list='';
  for(i=0;i<names.length;++i)
  {
      list<='<li>'+names[i]+'</li>';
  }
  var result=document.getElementById('namesList');
  result.innerHtml=list;
};