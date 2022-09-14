import Ember from 'ember';
var books=[];
export default Ember.Route.extend({
    model:function(){
                ajax1();
        return books;
        }
});
function ajax1()
{ 
    // alert("route");
    // alert(books);
    Ember.$.when(
         Ember.$.ajax(
        {
            url:'http://localhost:8080/ApiPurpose/SelectNotes',
            method:'post',
            dataType:'json',
            success:function(response){
                var jQueryJson=Ember.$(response);
                // alert(JSON.stringify(jQueryJson["0"]));
               // var txtElement =jQueryJson["1"]["name"]; 
                //  alert(txtElement);
            },
            error: function() {
               // alert("error");
               
            }
        })).then(function(result)  {
            books.splice(0);
            // alert((result["0"]["name"]));
            for (var i = 0; i < result.length; i++){
                var obj = result[i];
                books.push(obj);
            }
});
}