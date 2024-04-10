import Swal from 'sweetalert';

export const generarEnlaceMapa = (latitud, longitud) => {
    return `https://www.google.com/maps?q=${latitud},${longitud}`;
};

export const mostrarUbicacion = (direccion) => {
    const mapUrl = generarEnlaceMapa(direccion.latitud, direccion.longitud);
    Swal({
        title: '¡Encuentranos Aquí!, Te esperamos:',
        text: `Dirección: ${direccion.nombre}`,
        buttons: {
            cancel: "Cerrar",
            confirm: {
                text: "Ver en mapa",
                value: "verMapa",
            },
        },
    }).then((value) => {
        if (value === "verMapa") {
            window.open(mapUrl, "_blank");
        }
    });
};
