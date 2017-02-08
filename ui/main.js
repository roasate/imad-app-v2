//alert('hello');
function my()
{
    var array =['hello','yes'];
    var i;
    var list ='';
    for(i=0;i<array.length;++i)
    {
        list+='<li>'+array[i]+'</li>';
    }
    var name=document.getElementById("nameList");
    name.innerHTML=list;
}