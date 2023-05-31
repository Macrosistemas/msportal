
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        var display = false;
        for (j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].cells[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    display = true;
                    break;
                }
            }
        }
        if (display) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }

    var headerRow = document.getElementById("header-row");
    if (input.value !== "") {
        headerRow.style.display = "";
    } else {
        headerRow.style.display = "none";
    }
}
