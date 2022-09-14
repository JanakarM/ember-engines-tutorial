import Ember from 'ember';
export default Ember.Controller.extend({
    data: Ember.computed.alias('content'),
    
    fn:function(j) {
        var table, rows, a, switching, i, x, y, shouldSwitch;
        table = document.getElementsByTagName("table")[0];
        switching = true;
        if (document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;" || document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;") {
            for (i = 0; i < 10; i++) {
                if (i === j) {
                    document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;";
                }
                else
                    document.getElementById(i + "a").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            a = "a";
        }
        else if (document.getElementById(j + "a").innerHTML === "&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;") {

            for (i = 0; i < 10; i++) {
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
    },
    handle:function(e, k) {
        alert("k");
        if (e.keyCode === 13) {
            fun1(k);
        }
    },
    able:function()
    {
        alert("able called");
        document.getElementById("ip").disabled=false;
    },
    loads:function()
    {
        document.getElementById("load").visibility=false;
    }
});
