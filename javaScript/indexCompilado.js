"use strict";
// let mensaje: string = "hola mundo"
// console.log(mensaje)
// // Para cambiar texto en la SECCION SOBRE MI
const sobreMiInput = document.getElementById("sobreMiInput");
const sobreMiButton = document.getElementById("sobreMiButton");
const sobreMiParagraph = document.getElementsByClassName("sobreMiParagraph");
const sobreMiButtonMas = document.getElementById("sobreMiButtonMas");
const sobreMiDiv = document.getElementById("sobreMiDiv");
let i = 0;
const cambiarTextoSobreMi = () => {
    if (i < 4) {
        sobreMiInput.style.display = "block";
        sobreMiParagraph[i].textContent = sobreMiInput.value;
        console.log('i =' + i);
    }
    else {
        sobreMiInput.style.display = "none";
    }
};
sobreMiInput.addEventListener("keyup", function (event) {
    if (i < 4) {
        if (event.key === 'Enter') {
            sobreMiInput.style.display = "none";
            sobreMiInput.value = sobreMiParagraph[i].textContent;
            i++;
            sobreMiInput.value = '';
        }
    }
});
sobreMiButton.addEventListener('click', cambiarTextoSobreMi);
sobreMiInput.addEventListener('keyup', cambiarTextoSobreMi);
// // Para cambiar texto en la SECCION EDUCACION
// // FORMACION ACADEMICA
const academicaLi1 = document.getElementById('academicaLi1');
const academicaLi2 = document.getElementById('academicaLi2');
const academicaButton = document.getElementById('academicaButton');
const academicaInputParagraph = document.getElementsByClassName('academicaInputParagraph');
const academicaInputTitle = document.getElementsByClassName('academicaInputTitle');
const academicaTitle = document.getElementsByClassName('academicaTitle');
const academicaParagraph = document.getElementsByClassName('academicaParagraph');
const itemIcono = document.getElementsByClassName('itemIcono');
const academicaButtonMas = document.getElementById('academicaButtonMas');
// // //con clases y objetos
// // class Educacion {
// //     constructor(titulo, institucion, fecha) {
// //         this.titulo = titulo;
// //         this.institucion = institucion;
// //         this.fecha = fecha;
// //     }
// // }
// // const formacionAcademica = new Educacion(titulo, institucion, fecha)
// // const cursos = new Educacion(titulo, institucion, fecha)
// // const idiomas = new Educacion(titulo, institucion, fecha)
// // class Experiencia {
// //     constructor(cargo, institucion, fecha, descripcion) {
// //         this.cargo = cargo;
// //         this.institucion = institucion;
// //         this.fecha = fecha;
// //         this.descripcion = descripcion;
// //     }
// // }
// // const trabajo = new Experiencia(cargo, institucion, fecha, descripcion)
const editarFormacionAcademica = () => {
    academicaInputTitle[0].style.display = "block";
    academicaInputParagraph[0].style.display = "block";
    academicaTitle[0].style.display = "inline";
    academicaParagraph[0].style.display = "block";
    itemIcono[0].style.display = "inline";
    console.log(academicaInputTitle[0].value, academicaInputParagraph[0].value);
    //funcion que al dar enter se guarda la informacion el variable      
    academicaTitle[0].textContent = academicaInputTitle[0].value;
    academicaParagraph[0].textContent = academicaInputParagraph[0].value;
};
academicaButton.addEventListener('click', editarFormacionAcademica);
academicaInputTitle[0].addEventListener('keyup', editarFormacionAcademica);
academicaInputParagraph[0].addEventListener('keyup', editarFormacionAcademica);
// funcion para fijar el texto al titulo
academicaInputTitle[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        academicaInputTitle[0].value = academicaTitle[0].textContent;
        academicaButtonMas.style.display = "inline";
    }
});
// funcion para fijar el texto al parrafo
academicaInputParagraph[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        academicaInputParagraph[0].style.display = "none";
        academicaInputTitle[0].style.display = "none";
        academicaInputParagraph[0].value = academicaParagraph[0].textContent;
    }});
//funcion para boton mas
const editarFormacionAcademica2 = () => {
    academicaInputTitle[1].style.display = "block";
    academicaInputParagraph[1].style.display = "block";
    academicaTitle[1].style.display = "inline";
    academicaParagraph[1].style.display = "block";
    itemIcono[1].style.display = "inline";
    console.log(academicaInputTitle[1].value, academicaInputParagraph[1].value);
    //funcion que al dar enter se guarda la informacion el variable      
    academicaTitle[1].textContent = academicaInputTitle[1].value;
    academicaParagraph[1].textContent = academicaInputParagraph[1].value;
};
academicaButtonMas.addEventListener('click', () => {
    editarFormacionAcademica2();
    academicaButton.addEventListener('click', editarFormacionAcademica2);
    academicaInputTitle[1].addEventListener('keyup', editarFormacionAcademica2);
    academicaInputParagraph[1].addEventListener('keyup', editarFormacionAcademica2);
    // funcion para fijar el texto al titulo
    academicaInputTitle[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            academicaInputTitle[1].value = academicaTitle[1].textContent;
            academicaButtonMas.style.display = "inline";
        }
    });
    // funcion para fijar el texto al parrafo
    academicaInputParagraph[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            academicaInputParagraph[1].style.display = "none";
            academicaInputTitle[1].style.display = "none";
            academicaInputParagraph[1].value = academicaParagraph[1].textContent;
            academicaButtonMas.style.display = "inline";
        }
    });
});
academicaButton.addEventListener('click', editarFormacionAcademica);
// // CURSOS
const cursosLi1 = document.getElementById('cursosLi1');
const cursosLi2 = document.getElementById('cursosLi2');
const cursosButton = document.getElementById('cursosButton');
const cursosInputParagraph = document.getElementsByClassName('cursosInputParagraph');
const cursosInputTitle = document.getElementsByClassName('cursosInputTitle');
const cursosTitle = document.getElementsByClassName('cursosTitle');
const cursosParagraph = document.getElementsByClassName('cursosParagraph');
const cursosButtonMas = document.getElementById('cursosButtonMas');
const editarCursos = () => {
    cursosInputTitle[0].style.display = "block";
    cursosInputParagraph[0].style.display = "block";
    cursosTitle[0].style.display = "inline";
    cursosParagraph[0].style.display = "block";
    itemIcono[2].style.display = "inline";
    console.log(cursosInputTitle[0].value, cursosInputParagraph[0].value);
    //funcion que al dar enter se guarda la informacion el variable      
    cursosTitle[0].textContent = cursosInputTitle[0].value;
    cursosParagraph[0].textContent = cursosInputParagraph[0].value;
};
cursosButton.addEventListener('click', editarCursos);
cursosInputTitle[0].addEventListener('keyup', editarCursos);
cursosInputParagraph[0].addEventListener('keyup', editarCursos);
// funcion para fijar el texto al titulo
cursosInputTitle[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        cursosInputTitle[0].value = cursosTitle[0].textContent;
        cursosButtonMas.style.display = "inline";
    }
});
// funcion para fijar el texto al parrafo
cursosInputParagraph[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        cursosInputParagraph[0].style.display = "none";
        cursosInputTitle[0].style.display = "none";
        cursosInputParagraph[0].value = cursosParagraph[0].textContent;
        cursosButtonMas.style.display = "inline";
    }
});
//funcion para boton mas
const editarCursos2 = () => {
    cursosInputTitle[1].style.display = "block";
    cursosInputParagraph[1].style.display = "block";
    cursosTitle[1].style.display = "inline";
    cursosParagraph[1].style.display = "block";
    itemIcono[3].style.display = "inline";
    console.log(cursosInputTitle[1].value, cursosInputParagraph[1].value);
    //funcion que al dar enter se guarda la informacion el variable      
    cursosTitle[1].textContent = cursosInputTitle[1].value;
    cursosParagraph[1].textContent = cursosInputParagraph[1].value;
};
cursosButtonMas.addEventListener('click', () => {
    editarCursos2();
    cursosButton.addEventListener('click', editarCursos2);
    cursosInputTitle[1].addEventListener('keyup', editarCursos2);
    cursosInputParagraph[1].addEventListener('keyup', editarCursos2);
    // funcion para fijar el texto al titulo
    cursosInputTitle[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            cursosInputTitle[1].value = cursosTitle[1].textContent;
            cursosButtonMas.style.display = "inline";
        }
    });
    // funcion para fijar el texto al parrafo
    cursosInputParagraph[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            cursosInputParagraph[1].style.display = "none";
            cursosInputTitle[1].style.display = "none";
            cursosInputParagraph[1].value = cursosParagraph[1].textContent;
            cursosButtonMas.style.display = "inline";
        }
    });
});
// // IDIOMAS
const idiomasLi1 = document.getElementById('idiomasLi1');
const idiomasLi2 = document.getElementById('idiomasLi2');
const idiomasButton = document.getElementById('idiomasButton');
const idiomasInputTitle = document.getElementsByClassName('idiomasInputTitle');
const idiomasTitle = document.getElementsByClassName('idiomasTitle');
const idiomasButtonMas = document.getElementById('idiomasButtonMas');
const editarIdiomas = () => {
    idiomasInputTitle[0].style.display = "block";
    idiomasTitle[0].style.display = "inline";
    itemIcono[4].style.display = "inline";
    //funcion que al dar enter se guarda la informacion el variable      
    idiomasTitle[0].textContent = idiomasInputTitle[0].value;
};
idiomasButton.addEventListener('click', editarIdiomas);
idiomasInputTitle[0].addEventListener('keyup', editarIdiomas);
// funcion para fijar el texto al titulo
idiomasInputTitle[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        idiomasInputTitle[0].value = idiomasTitle[0].textContent;
        idiomasInputTitle[0].style.display = "none";
        idiomasButtonMas.style.display = "inline";
    }
});
//funcion para boton mas
const editarIdiomas2 = () => {
    idiomasInputTitle[1].style.display = "block";
    idiomasTitle[1].style.display = "inline";
    itemIcono[5].style.display = "inline";
    //funcion que al dar enter se guarda la informacion el variable      
    idiomasTitle[1].textContent = idiomasInputTitle[1].value;
};
idiomasButtonMas.addEventListener('click', () => {
    editarIdiomas2();
    idiomasButton.addEventListener('click', editarIdiomas2);
    idiomasInputTitle[1].addEventListener('keyup', editarIdiomas2);
    // funcion para fijar el texto al titulo
    idiomasInputTitle[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            idiomasInputTitle[1].value = idiomasTitle[1].textContent;
            idiomasInputTitle[1].style.display = "none";
            idiomasButtonMas.style.display = "inline";
        }
    });
});
// // Para cambiar texto en la SECCION EXPERIENCIA
const experienciaButton = document.getElementById('experienciaButton');
const experienciaInputParagraph1 = document.getElementsByClassName('experienciaInputParagraph1');
const experienciaInputParagraph2 = document.getElementsByClassName('experienciaInputParagraph2');
const experienciaInputTitle = document.getElementsByClassName('experienciaInputTitle');
const experienciaTitle = document.getElementsByClassName('experienciaTitle');
const experienciaParagraph1 = document.getElementsByClassName('experienciaParagraph1');
const experienciaParagraph2 = document.getElementsByClassName('experienciaParagraph2');
const experienciaButtonMas = document.getElementById('experienciaButtonMas');
const editarExperiencia = () => {
    experienciaInputTitle[0].style.display = "block";
    experienciaInputParagraph1[0].style.display = "block";
    experienciaInputParagraph2[0].style.display = "block";
    experienciaTitle[0].style.display = "inline";
    experienciaParagraph1[0].style.display = "block";
    experienciaParagraph2[0].style.display = "block";
    itemIcono[6].style.display = "inline";
    //funcion que al dar enter se guarda la informacion el variable      
    experienciaTitle[0].textContent = experienciaInputTitle[0].value;
    experienciaParagraph1[0].textContent = experienciaInputParagraph1[0].value;
    experienciaParagraph2[0].textContent = experienciaInputParagraph2[0].value;
};
experienciaButton.addEventListener('click', editarExperiencia);
experienciaInputTitle[0].addEventListener('keyup', editarExperiencia);
experienciaInputParagraph1[0].addEventListener('keyup', editarExperiencia);
experienciaInputParagraph2[0].addEventListener('keyup', editarExperiencia);
// funcion para fijar el texto al titulo
experienciaInputTitle[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        experienciaInputTitle[0].value = experienciaTitle[0].textContent;
        experienciaButtonMas.style.display = "inline";
    }
});
// funcion para fijar el texto al parrafo1
experienciaInputParagraph1[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        experienciaInputParagraph1[0].value = experienciaParagraph1[0].textContent;
        experienciaButtonMas.style.display = "inline";
    }
});
// funcion para fijar el texto al parrafo2
experienciaInputParagraph2[0].addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        experienciaInputParagraph1[0].style.display = "none";
        experienciaInputParagraph2[0].style.display = "none";
        experienciaInputTitle[0].style.display = "none";
        experienciaInputParagraph2[0].value = experienciaParagraph2[0].textContent;
        experienciaButtonMas.style.display = "inline";
    }
});
//funcion para boton mas
const editarExperiencia2 = () => {
    experienciaInputTitle[1].style.display = "block";
    experienciaInputParagraph1[1].style.display = "block";
    experienciaInputParagraph2[1].style.display = "block";
    experienciaTitle[1].style.display = "inline";
    experienciaParagraph1[1].style.display = "block";
    experienciaParagraph2[1].style.display = "block";
    itemIcono[7].style.display = "inline";
    //funcion que al dar enter se guarda la informacion el variable      
    experienciaTitle[1].textContent = experienciaInputTitle[1].value;
    experienciaParagraph1[1].textContent = experienciaInputParagraph1[1].value;
    experienciaParagraph2[1].textContent = experienciaInputParagraph2[1].value;
};
experienciaButtonMas.addEventListener('click', () => {
    editarExperiencia2();
    experienciaButton.addEventListener('click', editarExperiencia2);
    experienciaInputTitle[1].addEventListener('keyup', editarExperiencia2);
    experienciaInputParagraph1[1].addEventListener('keyup', editarExperiencia2);
    experienciaInputParagraph2[1].addEventListener('keyup', editarExperiencia2);
    // funcion para fijar el texto al titulo
    experienciaInputTitle[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputTitle[1].value = experienciaTitle[1].textContent;
            experienciaButtonMas.style.display = "inline";
        }
    });
    // funcion para fijar el texto al parrafo1
    experienciaInputParagraph1[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputParagraph1[1].style.display = "none";
            experienciaInputTitle[1].style.display = "none";
            experienciaInputParagraph1[1].value = experienciaParagraph1[1].textContent;
            experienciaButtonMas.style.display = "inline";
        }
    });
    // funcion para fijar el texto al parrafo2
    experienciaInputParagraph2[1].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputParagraph2[1].style.display = "none";
            experienciaInputParagraph1[1].style.display = "none";
            experienciaInputTitle[1].style.display = "none";
            experienciaInputParagraph2[1].value = experienciaParagraph2[1].textContent;
            experienciaButtonMas.style.display = "inline";
        }
    });
});
const editarExperiencia3 = () => {
    experienciaInputTitle[2].style.display = "block";
    experienciaInputParagraph1[2].style.display = "block";
    experienciaInputParagraph2[2].style.display = "block";
    experienciaTitle[2].style.display = "inline";
    experienciaParagraph1[2].style.display = "block";
    experienciaParagraph2[2].style.display = "block";
    itemIcono[8].style.display = "inline";
    //funcion que al dar enter se guarda la informacion el variable
    experienciaTitle[2].textContent = experienciaInputTitle[2].value;
    experienciaParagraph1[2].textContent = experienciaInputParagraph1[2].value;
    experienciaParagraph2[2].textContent = experienciaInputParagraph2[2].value;
};
experienciaButtonMas.addEventListener('click', () => {
    editarExperiencia3();
    experienciaButton.addEventListener('click', editarExperiencia3);
    experienciaInputTitle[2].addEventListener('keyup', editarExperiencia3);
    experienciaInputParagraph1[2].addEventListener('keyup', editarExperiencia3);
    experienciaInputParagraph2[2].addEventListener('keyup', editarExperiencia3);
    // funcion para fijar el texto al titulo
    experienciaInputTitle[2].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputTitle[2].value = experienciaTitle[2].textContent;
        }
    });
    // funcion para fijar el texto al parrafo1
    experienciaInputParagraph1[2].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputParagraph1[2].style.display = "none";
            experienciaInputTitle[2].style.display = "none";
            experienciaInputParagraph1[2].value = experienciaParagraph1[2].textContent;
            experienciaButtonMas.style.display = "inline";
        }
    });
    // funcion para fijar el texto al parrafo2
    experienciaInputParagraph2[2].addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            experienciaInputParagraph2[2].style.display = "none";
            experienciaInputParagraph1[2].style.display = "none";
            experienciaInputTitle[2].style.display = "none";
            experienciaInputParagraph2[2].value = experienciaParagraph2[2].textContent;
            experienciaButtonMas.style.display = "inline";
        }
    });
});
// //abrir menu hamburguesa
const buttonHamburguesa = document.getElementById('buttonHamburguesa');
const buttonHamburguesaCerrar = document.getElementById('buttonHamburguesaCerrar');
const divHamburguesa = document.getElementById('divHamburguesa');
const menuHamburguesaUl = document.getElementById('menuHamburguesaUl');
const heroFilter = document.getElementById('heroFilter');
const mainFilter = document.getElementById('mainFilter');
const footerFilter = document.getElementById('footerFilter');
const abrirMenu = () => {
    divHamburguesa.style.display = "block";
    buttonHamburguesa.style.display = "none";
    heroFilter.classList.add('filter');
    mainFilter.classList.add('filter');
    footerFilter.classList.add('filter');
};
const cerrarMenu = () => {
    divHamburguesa.style.display = "none";
    buttonHamburguesa.style.display = "inline";
    heroFilter.classList.remove('filter');
    mainFilter.classList.remove('filter');
    footerFilter.classList.remove('filter');
};
buttonHamburguesa.addEventListener('click', abrirMenu);
buttonHamburguesaCerrar.addEventListener('click', cerrarMenu);
