import Ember from 'ember';

export default Ember.Component.extend({
    actions:
    {
        // sess()
        // {
        //     alert();
        //     var txtElement;
        //     Ember.$(document).ready(function(){
        //       Ember.$.ajax(
        //           {
        //            url:'http://localhost:8080/ApiPurpose/GetSession',
        //             dataType:'json',
        //             ContentType:'application/json;charset=utf-8',
        //             method:'post',
        //             success:function(response){
        //                 var jQueryJson=Ember.$(response);
        //                 alert(jQueryJson+"jj"+JSON.stringify(jQueryJson));
        //                  txtElement =jQueryJson.find("Text"); 
        //                 //alert("txt"+txtElement.text());
        //             },
        //             error: function() {
        //                 alert("error");
                       
        //            } }
        //         );
        //     });
            
        // },
       

        fn6() {
            document.getElementById("myDropdown1").classList.toggle("show");
        },
        fun2() {
            document.getElementById("myDropdown2").classList.toggle("show");
        },
        fun(k) {
            // alert("able called");
            document.getElementById("ip").disabled=false;
            document.getElementById("ip").placeholder=document.getElementById(k).value;
            document.getElementById("ip").name=k;
            // document.getElementById("my").innerHTML = document.getElementById("my").innerHTML + "<input type='text' placeholder='" + document.getElementById(k).value + "' id='myInput'  {{action 'fun1' " + k + " on='keyPress'}} />";
        },
        handle(e, k) {
            if (e.keyCode === 13) {
                fun1(k);
            }
        },
        fun1() {
            // alert("yup");
            var j= document.getElementById("ip").name;
            // alert(j);
            var input, filter, table, tr, td, i;
            input = document.getElementById("ip");
            filter = input.value.toUpperCase();
            table = document.getElementsByTagName("table")[0];
            tr = table.getElementsByTagName("tr");
            // alert("1");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        },
        getReadyStateHandler(xmlHttpRequest) {
            return function() {
                if (xmlHttpRequest.readyState == 4) {
                    alert("xmlHttpRequest=" + xmlHttpRequest);
                    if (xmlHttpRequest.status == 200) {
                        alert("status=200");
                        var jsondata = JSON.parse(xmlHttpRequest.responseText);
                        alert(jsondata.msg);
                    } else {
                        alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
                    }
                }
            };
        },

        ajax1() {
            var name = { "UserId": document.getElementById("Userd").value };
            var xmlHttpRequest = new XMLHttpRequest();
            alert("xmlHttpRequest=" + xmlHttpRequest);
            xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
            xmlHttpRequest.open("POST", "DeleteEmp", false);
            xmlHttpRequest.setRequestHeader("Content-type", "application/json");
            alert("inside makeRequest()!");
            xmlHttpRequest.send(JSON.stringify(name));
        },
        fn4(j) {
            var i;
            if (j === 1) {
               var x = document.getElementsByName("col");
                for (i = 1; i < x.length; i++) {
                     x[i].checked = false;
                }
            }
            else {
                var x = document.getElementsByName("cb");
                for (i = 0; i < x.length; i++) {
                    x[i].checked = false;
                }
            }
        },
        fn3() {
            var i,k;
            var table = document.getElementsByTagName("table")[0];
            var rows1 = table.getElementsByTagName("tr");
            var x = document.getElementsByName("col");
            // alert("1");
            for (i = 0; i < x.length; i++) {
                // alert("2");
                if (!x[i].checked) {
                    k = 0;
                    // alert("");
                    rows1[0].getElementsByTagName("th")[x[i].value].style.display = "none";
                    for (k = 1; k < rows1.length; k++) {
                        rows1[k].getElementsByTagName("td")[x[i].value].style.display = "none";
                    }
                }
                else {
                    k = 0;
                    rows1[0].getElementsByTagName("th")[x[i].value].style.display = "table-cell";
                    for (k = 1; k < rows1.length; k++) {
                        rows1[k].getElementsByTagName("td")[x[i].value].style.display = "table-cell";
                    }
                }
            }
        },

        tog() {
            document.getElementById("myDropdown").classList.toggle("show");
}
    }
});
