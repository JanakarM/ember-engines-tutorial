
import Ember from 'ember';

export default Ember.Component.extend({
    actions:
 {   
     ajax1() 
     {
     alert();
     var names=["name","age","place","doj","contact","dept","isregistered","isverified","gender","password"];
     var i=0;
    var name={}; 
    while(i<6)
    {
      name[names[i]]=document.getElementById(names[i]).value;
         i++;
    }
    while(i<8)
    {
        if(document.getElementsByName(names[i])[0].checked)
           name[names[i]]="true";
        else
        name[names[i]]="false";
        i++;
    }
    if(document.getElementsByName(names[i])[0].checked)
    name[names[i]]="male";
 else
 name[names[i]]="female";
 name[names[i+1]]=document.getElementById(names[0]).value;
      Ember.$(document).ready(function(){
        // var n=name.toString();
         alert(JSON.stringify(name));
        Ember.$.ajax(
        {
            url:'http://localhost:8080/ApiPurpose/UpdateEmp',
            method:'post',
            dataType:'json',
            data:JSON.stringify(name),
            success:function(response){
                var jQueryJson=Ember.$(response);
                var txtElement =jQueryJson["0"]["msg"]; 
                 alert((txtElement));
            },
            error: function() {
                alert("error");
               
            }
        });
    });
        alert("done");
    }
      
    }
});
