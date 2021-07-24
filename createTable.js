function createTable(rows, column, obj){


    const table = document.getElementById("main-table");
    table.innerHTML = "";
    table.style.textAlign = "center";
    table.style.fontSize = "25px"
    table.style.width = "90%";
    table.style.height = "90%";
    table.style.fontFamily ="Lucida Console, Courier New, monospace";

    for (let i = 0; i < rows; i++){
            const newRow = document.createElement("tr");
            table.appendChild(newRow);

        for (let x = 0; x < column; x++){

            const newColumn = document.createElement("td");

            // Grab Obj Keys at index
            const listItem = Object.keys(obj[i]);

            //Grab listItem KeyValue
            const itemKey = listItem[x]

            //Get Value of that Key
            newColumn.textContent = obj[i][itemKey];

            // Middle Column
            if (x === 1){

                const columnWidth = newColumn.textContent
                newColumn.style.width = "1000px"
                newColumn.textContent = "";

                // Div inside row
                const newDiv = document.createElement('div');
                newDiv.style.backgroundColor = "#F2A93B";
                newDiv.style.width = columnWidth;
                newDiv.style.height = "100px";
                newDiv.style.borderRadius = "10px";
                newDiv.style.textAlign = "right";
                newDiv.style.fontSize = "13px";
                newColumn.appendChild(newDiv);
            }
            newRow.appendChild(newColumn);
        }

    }
}