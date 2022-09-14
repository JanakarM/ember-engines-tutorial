import Ember from 'ember';
var book=[];
export default Ember.Route.extend({
    model:function(){
      ajax1();
        return book;
        }
});
function ajax1()
 { 
//     alert("route");
//     alert(book);
    Ember.$.when(
       
         Ember.$.ajax(
        {
            url:'http://localhost:8080/ApiPurpose/SelectNotes',
            method:'post',
            dataType:'json',
            success:function(response){
                var jQueryJson=Ember.$(response);
                //alert(JSON.stringify(jQueryJson));
                var txtElement =jQueryJson["1"]["name"]; 
                // alert(txtElement);
            },
            error: function() {
                alert("error");
               
            }
        })).then(function(result)  {
            // alert((result["0"]["name"]));
            book.splice(0);
            // for (var i = 0; i < result.length; i++){
            //     var obj = result[i];
                book.push(result["0"]);
            // }
});
}