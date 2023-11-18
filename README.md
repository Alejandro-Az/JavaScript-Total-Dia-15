# JavaScript-Total-Dia-15
En esta ocasión subo el ejercicio del día 15 del curso "JavaScript Total" que estoy tomando en Udemy. Esta primera vez solo satisfago los requisitos para la resolución del ejercicio, pienso retomarlo al terminar el curso para brindar una solución más estética y/o elaborada nun/✨

### Consigna
La consigna pura y dura de este ejercicio es que tu sitio realice las peticiones GET, POST, PUT y DELETE. Y para eso, deberá contener como mínimo las siguientes condiciones:

1. Al iniciarse el sitio, es decir al cargarse en el navegador, se deberá obtener y mostrar todo el listado de elementos (de dispositivos) 
almacenados en la API y mostrarlos en nuestra página (por lo tanto deberías cargar esta función en el evento "onload" del body del HTML.

Para poder mostrar esa información, vamos a utilizar una tabla.

Esta tabla contiene un encabezado y un cuerpo para mostrar toda la información, 
que en este caso va a ser el objeto JSON que obtenemos al realizar la petición, con el listado de todos los dispositivos.

2. Tu sitio debe poder realizar consultas GET de cada dispositivo, para lo cual a la petición HTTP le debemos 
proporcionar el ID del elemento que queremos consultar. Para obtener este dato de manera individual, 
nuestra página deberá contar en algún lugar con un elemento input donde el usuario va a ingresar el 
ID del dispositivo que desea consultar y un botón que va a llamar a la función encargada de esa petición. 
La respuesta con la información del dispositivo, se deberá mostrar en pantalla distribuida en una serie de etiquetas 
textarea, que es un elemento HTML que no solo permite mostrar texto (como un párrafo), sino también que también el usuario lo pueda editar.

3. El usuario debe poder hacer peticiones de tipo POST, para que pueda agregar un nuevo registro a la API. 
Entonces el sitio debe tener un sector con 5 elementos input para que el usuario ingrese las características del nuevo dispositivo, 
y un botón que llame a una función encargada de la petición, que tome la información que ha ingresado el usuario, para construir un objeto JSON 
y agregarlo a la API. Debido a que nuestra API en realidad no permite esto, por razones de seguridad, construirás toda la petición como corresponde, 
pero lo único que verá el usuario es un "alert()" que "confirma" que el dispositivo se ha agregado.

4. Tu sitio permitirá al usuario modificar un elemento existente a través de peticiones PUT. 
Para eso tu sitio puede aprovechar los datos que se muestran en pantalla cuando el usuario hace una consulta 
de un registro individual, para permitir que el usuario pueda modificar los valores del objeto, 
y a través de un botón aparte pueda llamar a una función que tome esa información y reemplace la que hay en un determinado registro. 
Ten en cuenta que, nuevamente, en este caso solo estaremos fingiendo que nuestra petición modifica un registro, 
por lo que incluiremos un "alert()" para mostrarle al usuario que la operación se ha realizado con éxito.

5. También utilizando la información que se muestra cuando hacemos una consulta individual, 
tu sitio va a tener un botón "Eliminar" para que pueda realizar una petición de tipo DELETE, 
que capture el ID que ha elegido el usuario y lo borre de la API. Esto también va a ser una simulación, 
por lo que la respuesta solo va a mostrar un "alert()" de supuesta confirmación en pantalla.

### Pantallas de la web

Pagina principal
![web01](https://github.com/Alejandro-Az/JavaScript-Total-Dia-15/assets/105530752/22ee8c72-ce67-499e-8c14-29d6bb0acf9e)

Al ingresar un id
![web02](https://github.com/Alejandro-Az/JavaScript-Total-Dia-15/assets/105530752/e9940705-189d-47df-94cc-c58967028c15)
