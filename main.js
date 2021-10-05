const render = () => {
    const listado = document.getElementById("lista-pendientes") ;
    const plantilla = pendienetes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos= document.querySelectorAll('#lista-pendientes li');
    elementos.forEach((elemento, i));
        elementos.addEventListtener('click',()=>{
            elemento.parentNODE.renoveChild(elemnto);
            pendienetes.splice(i,1);
            actualizarPendientes(pendienetes);
            render();
        })
    })     
}

const actualizarPendientes =  (pendienetes) =>{
    const pendienetesCadena = JSON.stringify(pendienetes);
    localStorage.setItem('pendientes', pendienetesCadena);
}

window.onload = () =>{
    render();
    const formulario = document.getElementById("formulario-pendientes");
    formulario.onsubmit = (e) => {
            e.preventDefault();
            const pendienete = document.getElementById("pendiente")
            const contenidoPendiente = pendienete.value;
            pendienet.value = "";
            pendienetes.push(contenidoPendiente);
            actualizarPendientes(pendienetes);
            render();
    }
}