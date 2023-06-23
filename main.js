// Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página.

// Lo que queremos que se imprima por consola será:
// Nombre
// Número de repositorios
// Avatar (imagen)

// API URL: https://api.github.com/users/{username}
//EJEMPLO: https://api.github.com/users/sofiapinilla

//----------------------------------------------------------------------------------

//GET ITEMS

const API_URL = "https://api.github.com/users/";
const usuariosDiv = document.querySelector(".usuarios");
const formBuscar = document.getElementById("form");
const inputBuscar = document.getElementById("input-buscar");
const btnBuscar = document.getElementById("btn-buscar")

console.log(inputBuscar.value) // duda. porque no imprime el valor en consola y aparece vacio

//FUNCIONES

const buscarUsuario = async (e) => {
    e.preventDefault() //para que no se recargue la pagina autom. al pulsar el boton del form
    try {
        const busqueda = inputBuscar.value;
        const res = await axios.get(API_URL + busqueda)
        const usuario = res.data
        const repos = res.data.repos_url
        console.log(usuario);
        console.log(usuario.name)
        console.log(repos.length) //num repositorios
        console.log(usuario.avatar_url)
    } catch {
        console.error(error);
    }
};



//EVENT LISTENER
btnBuscar.addEventListener("click", buscarUsuario)

