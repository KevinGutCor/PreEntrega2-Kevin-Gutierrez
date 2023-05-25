//Bienvenida al usuario
let nombre = prompt("Ingrese su nombre de usuario: ");

function usuario(nombre) {}
usuario(
	alert(
		"Bienvenido/a " +
			nombre +
			" a Perfect-Time \n Por consola vera los resultados a la busqueda"
	)
);

//Lista de productos
const productos = [
	{ id: 1, nombre: "Skmei 9185", marca: "Casio ", precio: 8500 },
	{ id: 2, nombre: "Cat Special Ops 2", marca: "Casio ", precio: 12350 },
	{ id: 3, nombre: "Calavera 9195", marca: "Rolex ", precio: 20500 },
	{ id: 4, nombre: "Rolx Datejust", marca: "Rolex", precio: 14000 },
	{ id: 5, nombre: "Eco-Drive", marca: "Citizen", precio: 8700 },
	{ id: 6, nombre: "Promaster", marca: "Citizen", precio: 13500 },
	{ id: 7, nombre: "Lunar Fase", marca: "Montreal", precio: 17600 },
	{ id: 8, nombre: "Mp001", marca: "Montreal", precio: 4500 },
];

// NUEVO ARRAY DE CARRITO DE COMPRAS
const carrito = [];

let realizarCompra = " ";

//Funcion para mostrar los resultados de busqueda
function mostrarResultadoDeBusqueda(resultado) {
	resultado.forEach(function (elemento) {
		console.log(elemento);
	});
}

let eleccionMenu = " ";

while (eleccionMenu != "x") {
	eleccionMenu = prompt(
		`Opciones del Menú: \n "1" - Lista de productos \n "2" - Buscar producto por nombre de marca \n "3" - Buscar producto por precio \n "C" - Para ver el Carrito \n "X" - Finalizar la compra`
	);
	switch (eleccionMenu) {
		case "1":
			console.log("Lista de Productos:");
			//Mostrar la lista
			productos.forEach((producto) => {
				console.log(producto);
			});
			console.log("---------------------------------");

			let deseaComprar = " ";
			while (deseaComprar !== "M" || deseaComprar !== "m") {
				deseaComprar = prompt(
					"Para continuar con la compra intruduzca 'A' \n Para volver al menú introduzca 'M' "
				);
				if (deseaComprar == "A" || deseaComprar == "a") {
					let eleccionProducto = agregarProducto(
						parseInt(prompt("Ingrese el ID del producto que desea comprar"))
					);
					function agregarProducto(numObject) {
						return carrito.push(productos[numObject - 1]);
					}
					if (deseaComprar != " ") {
						alert(`Producto agregado:`);
					}
				} else if (deseaComprar == "m" || deseaComprar == "M") {
					break;
				} else {
					alert("Opción incorrecta. Vuelva a intentarlo");
				}
			}
			break;
		case "2":
			//Función de busqueda por nombre de marca
			function buscarMarca(filtro) {
				const busquedaMarca = productos.filter((el) =>
					el.marca.includes(filtro)
				);
				return busquedaMarca;
			}
			let busquedaUsuarioMarca = prompt("Indique la marca que desea comprar:");
			console.log(`Productos encontrados "${busquedaUsuarioMarca}"`);
			mostrarResultadoDeBusqueda(buscarMarca(busquedaUsuarioMarca));
			console.log("---------------------------------");

			let deseaComprarN = " ";
			while (deseaComprarN !== "M" || deseaComprarN !== "m") {
				deseaComprarN = prompt(
					"Para continuar con la compra intruduzca 'A' \n Para volver al menú introduzca 'M' "
				);
				if (deseaComprarN == "A" || deseaComprarN == "a") {
					eleccionProducto = agregarProducto(
						parseInt(prompt("Ingrese el ID del producto que desea comprar"))
					);
					function agregarProducto(numObject) {
						return carrito.push(productos[numObject - 1]);
					}
					if (deseaComprarN != " ") {
						alert(`Producto agregado:`);
					}
				} else if (deseaComprarN == "m" || deseaComprarN == "M") {
					break;
				} else {
					alert("Opción incorrecta. Vuelva a intentarlo");
				}
			}

			break;
		case "3":
			//Función de busqueda por precio
			function buscarPorPrecio(filtro) {
				const producto = productos.filter((el) => el.precio < filtro);
				return producto;
			}
			let buscarPrecio = prompt("Indique el precio maximo que desea pagar:");

			console.log(`Productos encontrados:`);
			mostrarResultadoDeBusqueda(buscarPorPrecio(buscarPrecio));
			console.log("---------------------------------");

			let deseaComprarP = " ";
			while (deseaComprarP !== "M" || deseaComprarP !== "m") {
				deseaComprarP = prompt(
					"Para continuar con la compra intruduzca 'A' \n Para volver al menú introduzca 'M' "
				);
				if (deseaComprarP == "A" || deseaComprarP == "a") {
					eleccionProducto = agregarProducto(
						parseInt(prompt("Ingrese el ID del producto que desea comprar"))
					);
					function agregarProducto(numObject) {
						return carrito.push(productos[numObject - 1]);
					}
					if (deseaComprarP != " ") {
						alert(`Producto agregado:`);
					}
				} else if (deseaComprarP == "m" || deseaComprarP == "M") {
					break;
				} else {
					alert("Opción incorrecta. Vuelva a intentarlo");
				}
			}
			break;
		case "C":
		case "c":
			//Función para mostrar el carrito
			function mostrarCarrito() {
				carrito.forEach((producto) => {
					console.log(producto);
				});
			}
			
			console.log("Carrito:");
			mostrarCarrito();
			console.log("---------------------------------");
			break;

		default:
			break;
	}
}

//FUNCION PARA SUMAR EL TOTAL DE LA COMPRA
const total = carrito.reduce(
	(acumulador, numero) => acumulador + numero.precio,
	0
);

if (total != 0) {
	alert(
		`El total a pagar es: ${total} \n Gracias por la compra. Lo esperamos pronto!`
	);
} else {
	alert("Gracias por la visita");
}
