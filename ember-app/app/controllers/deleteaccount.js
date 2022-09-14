import Ember from 'ember';

export default Ember.Controller.extend({
    logout:function()
    {
         var txtElement;
        Ember.$(document).ready(function(){
            Ember.$.ajax(
                {
                 url:'http://localhost:8080/ApiPurpose/DeleteEmp',
                  dataType:'json',
                  method:'post',
                  success:function(response){
                      var jQueryJson=Ember.$(response);
                      var json=jQueryJson["0"]["msg"];
                      alert(json);
                       },
                  error: function() {
                      alert("error1");
                     
                 } }
              );
          Ember.$.ajax(
              {
               url:'http://localhost:8080/ApiPurpose/logout',
                dataType:'json',
                method:'post',
                success:function(response){
                    var jQueryJson=Ember.$(response);
                    var json=jQueryJson["0"]["msg"];
                    alert(json);
                     },
                error: function() {
                    alert("error");
                   
               } }
            );
           
        }); 
        window.location.href="login";
    }
});
