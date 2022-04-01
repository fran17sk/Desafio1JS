//FUNCIONES
function agregarProducto(nombre,productos,i){
    productos[i]=nombre;
}
function subtotal(cantidad,lista,indice){
    let subtotal=cantidad*lista[indice];
    return subtotal;
}
function financiado(total,plan){
    if (plan==0){
        let totalfin=total*0.90;
        return totalfin;
    }
    if (plan==1){
        let totalfin=total*1.5;
        return totalfin
    }
    if (plan==3){
        let totalfin=total*1.12;
        return totalfin
    }
    if (plan==6){
        let totalfin=total*1.25;
        return totalfin
    }
    if (plan==9){
        let totalfin=total*1.35;
        return totalfin
    }
    if (plan==12){
        let totalfin=total*1.45;
        return totalfin
    }
}



//MAIN
alert("BIENBENIDO A LA CLETA|BICICLETAS");
alert("TENEMOS UNA MUY AMPLIA VARIEDAD DE BICICLETAS, DE MONTAÑA, PISTA, Y CICLOTURISMO");
let band=parseInt(prompt("INGRESE 1 PARA VENTAS DE BICICLETAS O 2 PARA REPUESTOS"));
//declaracion de variables
let nombre,precio,cantidad,total;
let listarep=["camara","cubierta","piñon","descarrilador","asciento","plato","caja"];
let preciorep=[1900,5000,5600,8000,1500,7500,3500];
let productos=[];
let codigo, conf;
let bicis=["Giant Talon 1","Giant Talon 3","Giant Aleron Pro","Trek Marlin 5","Trek X-Caliver 6","Trek X-Caliver 7","Trek X-Caliver 9","Trek Pro-Caliver 7","Trek Pro-Caliver 9"];
let precbicis = [85000,105000,385000,95000,285000,325000,485000,685000,899000];
if (band == 1){
    codigo=parseInt(prompt("BICICLETAS EN STOCK:\nCod\n1)  Giant Talon 1  $85.000\n2)  Giant Talon 3  $105.000\n3)  Giant Aleron Pro  $385.000\n4)  Trek Marlin 5  $95.000\n5)  Trek X-Caliver 6  $285.000\n6)  Trek X-Caliver 7  $325.000\n7)  Trek X-Caliver 9  $485.000\n8)  Trek Pro-Caliver 7  $685.000\n9)  Trek Pro-Caliver 9  $899.000\nINGRESE EL CODIGO DE LA BICI QUE DESEA COMPRAR"));
    conf=confirm("UDS ACABA DE ELEGIR "+bicis[codigo-1]+"A $ "+precbicis[codigo-1]);
    total=precbicis[codigo-1];
    pago=prompt("TOTAL A PAGAR: "+total+"\n¿DESEA ABONAR EN EFECTIVO O FINANCIADO?");
        pago=pago.toLowerCase();
        if (pago=="efectivo"){
            total=financiado(total,0);
            conf=confirm("LE HICIMOS UN 10% DE DESCUENTO, EL TOTAL A PAGAR ACUATILADO ES: "+total);
            alert("PAGO EXITOSO GENERANDO FACTURA...");
            alert("MUCHAS GRACIAS, VUELVA PRONTO");
        }else{
            if(pago=="financiado"){
                plan=parseInt(prompt("ELIJA LA CANTIDAD DE CUOTAS:\n1 CUOTA CON 5% DE RECARGO\n3 CUOTA CON 12% DE RECARGO\n6 CUOTA CON 25% DE RECARGO\n9 CUOTA CON 35% DE RECARGO\n12 CUOTA CON 45% DE RECARGO\n"))
                total=financiado(total,plan);
                conf=confirm("EL TOTAL A PAGAR ACTUALIZADO ES "+total);
                if (conf==true){
                    alert("PAGO EXITOSO GENERANDO FACTURA...");
                    alert("MUCHAS GRACIAS, VUELVA PRONTO");
                }
                if (conf==false){
                    alert("PAGO ANULADO. GRACIAS POR VISITARNOS");
                }
            }
        }
}
if (band == 2){
    let x = parseInt(prompt("Ingrese [1] para agregar productos en su carrito o [0] para sali y pagar"));
    let aux=0;
    let i=0;
    let indice=0;
    let subt=0;
    let total=0;
    let plan,pago;
    while (x==1){
        nombre=prompt("TENEMOS DIPONIBLE:\n"+listarep[0]+" $ "+preciorep[0]+"\n"+listarep[1]+" $ "+preciorep[1]+"\n"+listarep[2]+" $ "+preciorep[2]+"\n"+listarep[3]+" $ "+preciorep[3]+"\n"+listarep[4]+" $ "+preciorep[4]+"\n"+listarep[5]+" $ "+preciorep[5]+"\n"+listarep[6]+" $ "+preciorep[6]+"\nIngrese el nombre del producto que desa llevar: ");
        nombre=nombre.toLowerCase();
        for (let j=0;j<7;j++){
            if (nombre == listarep[j]){
                agregarProducto(nombre,productos,i);
                aux=1;
                i++;
                indice = j;
            }else{
                while (aux==0){
                    alert("INGRESO UN PRODUCTO INCORRECTO");
                    nombre=prompt("TENEMOS DIPONIBLE:\n"+listarep[0]+" $ "+preciorep[0]+"\n"+listarep[1]+" $ "+preciorep[1]+"\n"+listarep[2]+" $ "+preciorep[2]+"\n"+listarep[3]+" $ "+preciorep[3]+"\n"+listarep[4]+" $ "+preciorep[4]+"\n"+listarep[5]+" $ "+preciorep[5]+"\n"+listarep[6]+" $ "+preciorep[6]+"\nIngrese el nombre del producto que desa llevar: ");
                    nombre=nombre.toLowerCase();
                }
            }
        }

        cantidad=prompt("¿Que cantidad desea llevar?");
        subt=subtotal(cantidad,preciorep,indice);
        acept=confirm("El bubtotal del producto "+nombre+ " es "+subt);
        if (acept==true){
            total=total+subt;
        }else{
            while(acept==false){
                cantidad=prompt("¿Que cantidad desea llevar de "+nombre+"?");
                subtotal=subtotal(cantidad,preciorep,indice);
                acept=confirm("El bubtotal del producto "+nombre+ " es "+subt);
                if (acept==true){
                    total=total+subt;
            }
        }
        }
        x = parseInt (prompt("¿Ingrese 1 para agregar un producto o 0 para salir y pagar"));
    }
    while((x==0)&&(total!=0)){
        alert("En el carrito tenemos: "+productos+". El total a pagar es "+total);
        pago=prompt("TOTAL A PAGAR: "+total+"\n¿DESEA ABONAR EN EFECTIVO O FINANCIADO?");
        pago=pago.toLowerCase();
        if (pago=="efectivo"){
            total=financiado(total,0);
            conf=confirm("LE HICIMOS UN 10% DE DESCUENTO, EL TOTAL A PAGAR ACUATILADO ES: "+total);
            alert("PAGO EXITOSO GENERANDO FACTURA...");
            alert("MUCHAS GRACIAS, VUELVA PRONTO");
        }else{
            if(pago=="financiado"){
                plan=parseInt(prompt("ELIJA LA CANTIDAD DE CUOTAS:\n1 CUOTA CON 5% DE RECARGO\n3 CUOTA CON 12% DE RECARGO\n6 CUOTA CON 25% DE RECARGO\n9 CUOTA CON 35% DE RECARGO\n12 CUOTA CON 45% DE RECARGO\n"));
                total=financiado(total,plan);
                conf=confirm("EL TOTAL A PAGAR ACTUALIZADO ES "+total);
                if (conf==true){
                    alert("PAGO EXITOSO GENERANDO FACTURA...");
                    alert("MUCHAS GRACIAS, VUELVA PRONTO");
                }
                if (conf==false){
                    alert("PAGO ANULADO. GRACIAS POR VISITARNOS");
                }
            }
        }
        break;
    }
}
