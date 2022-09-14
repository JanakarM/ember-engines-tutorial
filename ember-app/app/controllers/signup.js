import Ember from 'ember';

export default Ember.Controller.extend({
    ajax1:function()
    {
                alert();
            var names=["name","password"];//,"place","doj","contact","dept","isregistered","isverified","gender"];
            var i=0;
           var name={};
           var p=document.getElementById("password").value;
           var p1=document.getElementById("confirmpassword").value;
           if(p==p1)
           { 
               alert("match");
           while(i<2)
           {
             name[names[i]]=document.getElementById(names[i]).value;
                i++;
           }
             Ember.$(document).ready(function(){
               // var n=name.toString();
                alert(JSON.stringify(name));
               Ember.$.ajax(
               {
                   url:'http://localhost:8080/ApiPurpose/AddEmp',
                   method:'post',
                   dataType:'json',
                   data:JSON.stringify(name),
                   success:function(response){
                       alert(response);
                       var jQueryJson=Ember.$(response);
                       alert("your user id is '"+(jQueryJson["0"]["UserId"])+"'\n and you can use this id to login");
                       var txtElement =jQueryJson.find("Text"); 
               },
                   error: function() {
                       alert("error");
                      
                   }
               });
           });
           window.location.href="login";
            alert("done");
           }
           else
           {
               alert("passwords doesnt match");
           }
       
        }
       
});
