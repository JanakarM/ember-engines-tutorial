import Ember from 'ember';

export default Ember.Controller.extend({
    
    save: function () {
        var fname = this.get('id');
        var lname = document.getElementById("password").value;
        alert(fname + ',' + lname);
        var txtElement;
        Ember.$(document).ready(function(){
          Ember.$.ajax(
              {
               url:'http://localhost:8080/ApiPurpose/SelectEmp',
                dataType:'json',
                data:JSON.stringify({UserId:fname,password:lname}),
                method:'post',
                success:function(response){
                    var jQueryJson=Ember.$(response);
                    alert(JSON.stringify(jQueryJson));
                   //alert(JSON.stringify(jQueryJson));
                    var json=jQueryJson["0"]["msg"];
                    //alert(json);
                    //alert(JSON.stringify(json));
                    },
                error: function() {
                    alert("error");
                   
               } }
            );
        });
        //window.location.href="notes";
    }
});
