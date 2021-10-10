
class DataTable {
    constructor(dataOrigin, context) {
        this.dataOrigin = dataOrigin;
        this.context = context;
    }

    fillContext() {
        fetch(this.dataOrigin)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let htmlContent = '<table id="table_id"><thead><tr><th> Id </th>' +
                            '<th> Quantity </th>' +
                            '<th> Name </th>' +
                            '<th> Price </th></tr></thead><tbody>';
            let row = '';
            for (const object of data) {
                for (const key in object) {
                    row += `<td> ${object[key]} </td>`
                }

                htmlContent += `<tr> ${row} </tr>`;
                row = '';
            }
            this.context.innerHTML = htmlContent + '</tbody></table>';
            $(document).ready(function () {
                $('#table_id').DataTable();
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}