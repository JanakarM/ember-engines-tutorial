import Ember from 'ember';

export default Ember.Controller.extend({
   update:function()
   {
    //    alert("update called");
       var Id;
    var table, rows,a, switching, i, x, y, shouldSwitch; 
    table = document.getElementsByTagName("table")[0];
    rows = table.getElementsByTagName("tr");
    Ember.$("input:checkbox[name=cb]:checked").each(function(){
        Id=Ember.$(this).val();
    });
    // alert(Id);
    var txtElement;
    // alert("doc ready");
    // Ember.$(document).ready(function(){
        Ember.$.when( 
      
      Ember.$.ajax(
          {
           url:'http://localhost:8080/ApiPurpose/UpSel',
            dataType:'json',
            ContentType:'application/json;charset=utf-8',
            method:'post',
            data:JSON.stringify({Id:Id}),
            success:function(response){
                var jQueryJson=Ember.$(response);
                // alert(JSON.stringify(jQueryJson));
                
            },
            error: function() {
                alert("error");
               
           } }
        ))
        
    // });
   },
   delete:function()
   {
       alert("delete called");
       var Id="(";
    var table, rows,a, switching, i, x, y, shouldSwitch; 
    table = document.getElementsByTagName("table")[0];
    rows = table.getElementsByTagName("tr");
    Ember.$("input:checkbox[name=cb]:checked").each(function(){
        Id+=Ember.$(this).val()+",";
    });
    Id+="-1)"
    alert(Id);
    var txtElement;
    alert("doc ready");
    // Ember.$(document).ready(function(){
        Ember.$.when( 
      
      Ember.$.ajax(
          {
           url:'http://localhost:8080/ApiPurpose/DeleteNotes',
            dataType:'json',
            ContentType:'application/json;charset=utf-8',
            method:'post',
            data:JSON.stringify({id:Id}),
            success:function(response){
                var jQueryJson=Ember.$(response);
                alert(JSON.stringify(jQueryJson));
                
            },
            error: function() {
                alert("error");
               
           } }
        ))
        
    // });
   },
   fn:function(j) {
    var table, rows, a, switching, i, x, y, shouldSwitch;
    table = document.getElementsByTagName("table")[0];
    switching = true;
    if (document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;" || document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;") {
        for (i = 1; i <= 3; i++) {
            if (i === j) {
                document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;";
            }
            else
                document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        a = "a";
    }
    else if (document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;") {

        for (i = 1; i <= 3; i++) {
            if (i === j)
                document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;";
            else
                document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }

        a = "d";
    }
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[j];
            y = rows[i + 1].getElementsByTagName("TD")[j];
            if (a === "a") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            else {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
});
