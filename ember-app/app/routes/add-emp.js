import Ember from 'ember';
var users=[];
var UserId;
export default Ember.Route.extend({
    model:function(){
      ajax1();
        return users;
        }
});
function ajax1()
{ 
    // alert("route");
    // alert(  users);
 
   Ember.$.when(
         Ember.$.ajax(
        {
            url:'http://localhost:8080/ApiPurpose/SelectEmp',
            method:'post',
            dataType:'json',
            data:JSON.stringify({UserId:UserId}),
            success:function(response){
                var jQueryJson=Ember.$(response);
                // alert(JSON.stringify(jQueryJson["0"]["name"]));
            },
            error: function() {
                alert("error");
            }
        })).then(function(result)  {
            users.splice(0);
            // alert((result["0"]["name"]));
            // for (var i = 0; i < result.length; i++){
            //     var obj = result[i];
                  users.push(result["0"]);
            // }
});
}