function verValoracion(event) {
  var valor = document.getElementById("rango").value;
  alert(`Has valorado con ${valor} puntos`);
}

function verCuenta() {
  if (
    document.getElementById("pais").value == "" ||
    document.getElementById("iban").value == "" ||
    document.getElementById("entidad").value == "" ||
    document.getElementById("sucursal").value == "" ||
    document.getElementById("dc").value == "" ||
    document.getElementById("cuenta").value == ""
  ) {
    alert("Debe cumplimentar todos los datos bancarios");
  } else {
    var valor =
      document.getElementById("pais").value +
      document.getElementById("iban").value +
      "-" +
      document.getElementById("entidad").value +
      "-" +
      document.getElementById("sucursal").value +
      "-" +
      document.getElementById("dc").value +
      document.getElementById("cuenta").value;
    alert(`Le informamos que su cuenta bancaria es: ${valor}`);
  }
}

function verDia() {
  var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  var validdate = document.getElementById("fecha").value;
  if (validdate == "") {
    alert("Fecha no válida");
  } else {
    var d = new Date(document.getElementById("fecha").value);
    alert(
      `La fecha seleccionada en el elemento de fecha es un ${
        dias[d.getUTCDay()]
      }`
    );
  }
}
