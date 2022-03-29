alert("BIENBENIDO A UNIVERSIDAD UCAS");
x=prompt("PARA BECAS INGRESE-->1       PARA COMUNICARTE CON UN ASESOR INGRESE -->2     PARA SALIR INGRESE -->3");
opciones=[1,2,3]
let band=false;
while (band==false){
    if (x in opciones){
        band=true;
    }
    else{
        alert("INGRESO UNA OPCION INVALIDA")
        x=prompt("PARA BECAS INGRESE-->1       PARA COMUNICARTE CON UN ASESOR INGRESE -->2     PARA SALIR INGRESE -->3");
    }
}
while (x in opciones){
    if (x==1){
        alert("BIENVENIDO A LA UNIVERSIDAD UCAS|BECAS");
        alert("INGRESAR DATOS DEL USUARIO");
        let name = prompt("NOMBRE COMPLETO");
        console.log(name);
        let age = prompt("INGRESE SU EDAD");
        if (age<17){
            alert("USTED NO TIENE LA EDAD SUFICIENTE PARA SER ALUMNO DE LA INSTITUCION");
        }else{
            console.log(age);
            let n = prompt("¿CUANTAS MATERIAS FINALIZO ESTE AÑO?");
            let suma=0;
            for (i=0;i<n;i++){
                let materia = prompt("INGRESE LA ASIGNATURA(lengua, matematica, etc...): ");
                let nota = parseInt(prompt("¿CUANTO SE SACO EN "+materia+": "));
                suma = suma + nota;
            }
            let promedio = suma / n;
            console.log(promedio);

            if (promedio>=8){
                alert("FELICIDADES "+name+" AL OBTENER UN PROMEDIO MAYOR A 8 SERA BENEFICIADO CON UNA BECA DE 9000 DE PESOS");
            }else{
                alert(name+" TU PROMEDIO NO ES EL SUFICIENTE PARA SOLICITAR UNA BECA");
            }
        }
    }
    if (x==2){
        alert("PARA COMUNICARSE CON UN ASESOR LLAME AL 0810-444-5858");
    }
    if (x==3){
        break;
    }
    alert("BIENBENIDO A UNIVERSIDAD UCAS");
    x=prompt("PARA BECAS INGRESE-->1       PARA COMUNICARTE CON UN ASESOR INGRESE -->2     PARA SALIR INGRESE -->3");
}
