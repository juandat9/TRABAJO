{

    var nombre = document.getElementById("nombre").value;

    var apellido = document.getElementById("apellido").value;
    var datos = [nombre,apellido,email];

    const tr = document.createElement("tr");
    datos.forEach(element => {
        const th = document.createElement("th");
    const NA = document.createTextNode(element);
        th.appendChild(na);
        tr.appendChild(th);
    });



    document.getElementById("tabla").appendChild(tr);
}