let listaInformacion = document.getElementById('listaInformacion');
let obtenerId = document.getElementById('obtenerId');
let areaTexto = document.getElementById('areaTexto');

//Campos de texto
let nombre = document.getElementById("nombre");
let modelo = document.getElementById("modelo");
let color = document.getElementById("color");
let almacenamiento = document.getElementById("almacenamiento");
let procesador = document.getElementById("procesador");

//botones
let botonAgregar = document.getElementById("botonAgregar");
let botonModificar = document.getElementById("botonModificar");

//Encabezado
let encabezadoDispositivo = document.getElementById("encabezadoDispositivo");

function obtenerDatos() {
    axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/db')
    .then(function(respuesta) {
        for(let datos of respuesta.data.dispositivos) {
            let tableRow = document.createElement('tr');

            let tableDataId = document.createElement('td');
            tableDataId.innerText = datos.id;
            tableRow.appendChild(tableDataId);

            let tableDataMarca = document.createElement('td');            
            tableDataMarca.innerText = datos.marca;
            tableRow.appendChild(tableDataMarca);

            let tableDataModelo = document.createElement('td');
            tableDataModelo.innerText = datos.modelo;
            tableRow.appendChild(tableDataModelo);

            let tableDataColor = document.createElement('td');
            tableDataColor.innerText = datos.color;
            tableRow.appendChild(tableDataColor);

            let tableDataAlmacenamiento = document.createElement('td');
            tableDataAlmacenamiento.innerText = datos.almacenamiento;
            tableRow.appendChild(tableDataAlmacenamiento);

            let tableDataProcesador = document.createElement('td');
            tableDataProcesador.innerText = datos.procesador;
            tableRow.appendChild(tableDataProcesador);

            listaInformacion.appendChild(tableRow);
        }
    }).catch(function(error) {
        console.log(error);
    })
}

function obtenerPorId(id) {
    id = obtenerId.value;
    if(id > 0) {
        listaInformacion.innerHTML = "";
        axios.get(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`)
        .then(function(respuesta) {
            let tableRow = document.createElement('tr');

            let tableDataId = document.createElement('td');
            tableDataId.innerText = respuesta.data.id;
            tableRow.appendChild(tableDataId);

            let tableDataMarca = document.createElement('td');            
            tableDataMarca.innerText = respuesta.data.marca;
            tableRow.appendChild(tableDataMarca);

            let tableDataModelo = document.createElement('td');
            tableDataModelo.innerText = respuesta.data.modelo;
            tableRow.appendChild(tableDataModelo);

            let tableDataColor = document.createElement('td');
            tableDataColor.innerText = respuesta.data.color;
            tableRow.appendChild(tableDataColor);

            let tableDataAlmacenamiento = document.createElement('td');
            tableDataAlmacenamiento.innerText = respuesta.data.almacenamiento;
            tableRow.appendChild(tableDataAlmacenamiento);

            let tableDataProcesador = document.createElement('td');
            tableDataProcesador.innerText = respuesta.data.procesador;
            tableRow.appendChild(tableDataProcesador);

            listaInformacion.appendChild(tableRow);

            botonAgregar.style.display = "none";
            botonModificar.style.display = "block";
            encabezadoDispositivo.textContent = "Modificar dispositivo";
    })
    } else {
        listaInformacion.innerHTML = "";
        obtenerDatos();
        
        botonAgregar.style.display = "block";
        botonModificar.style.display = "none";
        encabezadoDispositivo.textContent = "Agregar nuevo dispositivo";
    }
}

//Nombre  |  Modelo  |  Color  |  Almacenamiento  |  Procesador
function agregarDispositivo() {
    axios.post('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/', {
        'nombre': nombre.value,
        'modelo': modelo.value,
        'color': color.value,
        'almacenamiento': almacenamiento.value,
        'procesador': procesador.value
    })
    .then(function(){
        alert("El elemento se ha agregado exitosamente");
    }).catch(error => console.log(error));
}

function modificarDispositivo(id) {
    id = obtenerId.value;
    axios.put(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
        'nombre': nombre.value,
        'modelo': modelo.value,
        'color': color.value,
        'almacenamiento': almacenamiento.value,
        'procesador': procesador.value
    }).then(function(response){
        alert("El elemento se ha modificado exitosamente");
    }).catch(error => console.log(error));
}

function eliminarDispositivo(id) {
    id = obtenerId.value;
    axios.delete(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`)
    .then(function(response){
        alert("El elemento se ha eliminado exitosamente");
        console.log(response);
    }).catch(error => console.log(error));
}

/* Ejemplo del curso para llenar los campos... */
/*
function obtenerDatos() {
    axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/db')
    .then(function(respuesta) {
        let salida = "";
        for(let datos of respuesta.data.dispositivos) {
            salida += 
            `
            <tr>
                <td>${datos.id}</td>
                <td>${datos.marca}</td>
                <td>${datos.modelo}</td>
                <td>${datos.color}</td>
                <td>${datos.almacenamiento}</td>
                <td>${datos.procesador}</td>
            </tr>
            `
        }
        listaInformacion.innerHTML = salida;
    }).catch(function(error) {
        console.log(error);
    })
}
*/