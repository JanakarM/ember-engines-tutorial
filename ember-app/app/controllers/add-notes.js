import Ember from 'ember';

export default Ember.Controller.extend({
    addnotes:function()
    {
        var name={name:document.getElementById("name").value,contents:document.getElementById("contents").value};
        Ember.$(document).ready(function(){
            // var n=name.toString();
             alert(JSON.stringify(name));
            Ember.$.ajax(
            {
                url:'http://localhost:8080/ApiPurpose/AddNotes',
                method:'post',
                dataType:'json',
                data:JSON.stringify(name),
                success:function(response){
                    var jQueryJson=Ember.$(response);
                    var txtElement =jQueryJson["0"]["msg"]; 
                     alert(txtElement);
                },
                error: function() {
                    alert("error");
                   
                }
            });
        });
    }
});
