

class cultivo{
	constructor(nombre, tipo, epocacosecha, produccion, costoporunid, preciov){
		this.nombre=nombre;
		this.tipo=tipo;
		this.epocacosecha=epocacosecha;
		this.produccion=produccion;
		this.costoporunid=costoporunid;
		this.preciov=preciov;
		}

		ganancia(){


			let ganancia= this.preciov - this.costoporunid;
			console.log("tu ganancia ha sido : " + "S/"+ ganancia);

			if (this.costoporunid>this.preciov){
				console.log(" Por lo tanto has tenido una pérdida de :" + ganancia + "que equivale a " + ((this.costoporunid/this.preciov)*100) + "%");
			}
			else{
				console.log("Excelente, has tenido una ganancia del :" + ((this.costoporunid/this.preciov)*100) + "%");
			}
		}
	
		cambiarnombre(nuevonombre){
			this.nombre=nuevonombre;
		}



}

//ingresando nuevos datos y creando un nuevo objeto

let cultivo1 = new cultivo("lechuga","hortaliza","primavera",1200,1.2,0.8);
let cultivo2 = new cultivo("espinaca","hortaliza","verano",500,2,2.5);
let cultivo3 = new cultivo("papa","verdura","otonio",750,1,2.5);
let cultivo4 = new cultivo("zanahoria","verdura","invierno",1000,1.5,0.7); 
let cultivo5 = new cultivo("tomate","fruta","otonio",1200,2.5,3);

const cultivos=[];

cultivos.push(cultivo1,cultivo2, cultivo3, cultivo4, cultivo5);

console.log(cultivos);



let nombre = prompt("Para ingresar un nuevo cultivo Aceptar, caso contrario SALIR");
	
function agregarcultivo(){	
const nombrec= prompt("ingresar nombre del cultivo. Ejem: lechuga, culantro, perejil, etc. o SALIR");
const tipoc = prompt ("ingresar tipo de cultivo. Ejem. hortaliza, fruta o verdura");
const epocacosechac= prompt ("ingresa primavera /verano/ otoño / invierno");
const produccionc=prompt("ingresa los Kg cosechados");
const costoporunidc=prompt("ingresa tu costo de produccion unitario en S/");
const preciovc=prompt("ingresa el precio de venta unitario en S/.");


let cultivonuevo = new cultivo(nombrec, tipoc, epocacosechac, produccionc, costoporunidc, preciovc);
cultivos.push(cultivonuevo);
console.log(cultivos);
}
			

 while (nombre !=="SALIR"){
	agregarcultivo()
	nombre = prompt("Para ingresar un nuevo cultivo Aceptar, caso contrario SALIR");
 }
			


//Para saber si se tienen ganancias o perdidas
cultivo1.ganancia();
cultivo3.ganancia();


//Para saber las producciones mayores a los 800Kg
let produccionesmayores = cultivos.filter(cultivo=>cultivo.produccion>800)
console.log(" los cultivos que produjeron una cantidad mayor a los 800KG fueron :" + produccionesmayores);


//Para cambiar nombre del cultivo ingresado
cultivo4.cambiarnombre("rabanito");
console.log(cultivo4.nombre);

//Para filtrar los cultivos de verano
let temporada = cultivos.filter(cultivo=>cultivo.epocacosecha=="verano");
console.log(temporada);