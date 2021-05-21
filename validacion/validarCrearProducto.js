export default function validarCrearCuenta(valores) {
    let errores = {};

    //validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es Obligatorio";
    }
    //validar la empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre de Empresa es obligatorio";
    }

    //Validar la URL
    if(!valores.url) {
        errores.url ="La URL del producto es obligatoria";
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no valida";
    }

    //validar descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripcion de tu producto";
    }

    return errores;
}