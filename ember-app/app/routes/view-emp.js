import Ember from 'ember';
var posts=[];
export default Ember.Route.extend({
    model:function(){
        //posts=[{name:"jana"},{name:"kar"}];
        ajax1();
        return posts;
        }
});
function ajax1()
{ 
    // alert("route");
    // alert(posts);
   Ember.$.when(
       
         Ember.$.ajax(
        {
            url:'http://localhost:8080/ApiPurpose/SelectEmp',
            method:'post',
            dataType:'json',
            success:function(response){
                var jQueryJson=Ember.$(response);
                // alert(JSON.stringify(jQueryJson["0"]));
                var txtElement =jQueryJson["1"]["name"]; 
                //  alert(txtElement);
            },
            error: function() {
                alert("error");
               
            }
        })).then(function(result)  {
            posts.splice(0);
            // alert((result["0"]["name"]));
            for (var i = 0; i < result.length; i++){
                var obj = result[i];
                posts.push(obj);
            }
});
}