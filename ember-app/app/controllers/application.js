import Ember from 'ember';

export default Ember.Controller.extend({
    store:Ember.inject.service(),
    contacts:function()
    {
      Ember.$(document).ready(function(){
        Ember.$.ajax(
            {
             url:'http://localhost:8080/ApiPurpose/GetSession',
              dataType:'json',
              method:'post',
              success:function(response){
                  var jQueryJson=Ember.$(response);
                 var   txtElement =jQueryJson["0"]["UserId"]; 
                   if(txtElement==undefined)
                   window.location.href="login";
              },
              error: function() {
                  alert("error iss");
                 
             } }
          );
         Ember.$.ajax(
             {
              url:'http://localhost:8080/ApiPurpose/SelectEmp',
               dataType:'json',
               method:'post',
               success:function(response){
                   var jQueryJson=Ember.$(response);
                   alert(jQueryJson["0"]["UserId"]);
                 var   txtElement =jQueryJson["0"]["UserId"]; 
               },
               error: function() {
                   alert("error");
                  
              } }
           );
       });
    //    users: Ember.computed(function(){
    //     const store = this.get('store');
    //     return store.findAll('user');
    //   }).volatile()
    },
    sess:function()
   {
         Ember.$.ajax(
             {
              url:'http://localhost:8080/ApiPurpose/GetSession',
               dataType:'json',
               method:'post',
               success:function(response){
                   var jQueryJson=Ember.$(response);
                  var  txtElement =jQueryJson["0"]["UserId"]; 
                    if(txtElement=="-99")
                    window.location.href="login";
               },
               error: function() {
                   alert("error iss");
                  
              } });
  
   },
  
   logout:function()
   {
        Ember.$(document).ready(function(){
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
   }
   
});
