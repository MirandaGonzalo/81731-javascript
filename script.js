var articulos = [
  {
    id: 1,
    nombre: 'Artículo 1',
    precio: 29.99,
    cantidad: 32,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9BHzJ4ZW17VTuBaEQiTE3aeem5U1ffofWZjfWYJZsn8pVG7BfMuivDYGv1sPBH3iaxA&usqp=CAU',
  },
  {
    id: 2,
    nombre: 'Artículo 2',
    precio: 12.99,
    cantidad: 12,
    imagen:
      'https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$650_519_PNG$',
  },
  {
    id: 3,
    nombre: 'Artículo 3',
    precio: 45.99,
    cantidad: 32,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlqyKW1xnDlyUp0EZKOoPJ1LJM7i4EbVG-A&usqp=CAU',
  },
  {
    id: 4,
    nombre: 'Artículo 4',
    precio: 238.99,
    cantidad: 75,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5xLZLM5blIeCGdl8TJEIwTNMOF2iZp0K-qelsCPgXDrAHDaCvEy1isgpoM7bvu2Utk8&usqp=CAU',
  },
  {
    id: 5,
    nombre: 'Artículo 5',
    precio: 77.99,
    cantidad: 211,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4qgSQOUoXtprONYfJZyhTxpa-uYtdgLxvg&usqp=CAU',
  },
  {
    id: 6,
    nombre: 'Artículo 6',
    precio: 84.99,
    cantidad: 4,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KRTzsAAh9TIOKzBUA12r_2kiafsrcfZzwYEa97mVrmC3epaS8VjFBjOekwuSVm6GAyk&usqp=CAU',
  },
];

document.getElementById('btnArticulos').onclick = mostrarArts;

function mostrarArts() {
  var divArticulos = document.getElementById('divArticulos');
  var tablaHtml = '<table class="table table-striped">';

  articulos.forEach(function (a) {
    var td1 = '<td>' + a['id'] + '</td>';
    var td2 = '<td>' + a['nombre'] + '</td>';
    var td3 = '<td>' + a['precio'] + '</td>';
    var td4 = '<td>' + a['cantidad'] + '</td>';
    var td5 = '<td><img src="' + a['imagen'] + '"></td>';
    tablaHtml = tablaHtml + '<tr>' + td1 + td2 + td3 + td4 + td5 + '</tr>';
    console.log(a);
  });

  tablaHtml = tablaHtml + '</table>';
  divArticulos.innerHTML = tablaHtml;
}

function edad() {
  ban = false;
  while (ban == false) {
    edad = prompt('ingresa tu edad');
    if (isNaN(edad)) {
      edad = prompt('ingresa tu edad nuevamente');
    } else {
      alert(parseInt(edad) + 10);
      ban = true;
    }
  }
}

var colores = ['verde', 'rojo', 'azul'];
var colores2 = colores;

colores2 = colores.slice();
