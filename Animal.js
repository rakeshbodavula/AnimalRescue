var rowcount=0;
let dis=document.getElementById('submit');
dis.addEventListener('click',addRow());

function addRow(){
    var address=[];
    var name=[];
    var city=[];
    var mobile=[];
    address[rowcount]=document.getElementById('address').value;
    name[rowcount]=document.getElementById('name').value;
    city[rowcount]=document.getElementById('city').value;
    mobile[rowcount]=document.getElementById('phno').value;
    if(!address || !city || !mobile){
        alert('Please fill all the fields');
        return;
    }
    let table=document.getElementById('table');
    let newRow=table.insertRow(rowcount+1);

    var col0=newRow.insertCell(0);
    var col1=newRow.insertCell(1);
    var col2=newRow.insertCell(2);
    var col3=newRow.insertCell(3);

    col0.innerHTML=name[rowcount];
    col1.innerHTML=address[rowcount];
    col2.innerHTML=city[rowcount];
    col3.innerHTML=mobile[rowcount];
    rowcount++;
}