let container = document.getElementById("seccion");

const comprarTicket = () => {
  container.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 py-3">
                <div class="card-group gap-1">
                    <div class="card">
                        <div class="card-body border border-primary mr-1">
                            <h5 class="card-title text-center">Estudiante</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center fw-bolder">80%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body border border-info mr-1 ">
                            <h5 class="card-title text-center">Trainee</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center fw-bolder">50%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body border border-warning mr-1">
                            <h5 class="card-title text-center">Junior</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center fw-bolder">15%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="row">
            <div class="col text-uppercase text-center">
                <small>venta</small>
                <h2>valor de ticket $200</h2>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 py-1">
                <form action="index.html" method="POST" class="w-100">
                    <div class="form-row">
                        <div class="d-flex py-2">
                            <div class="form-group col-6 col-md-6 p-1">
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>
                            <div class="form-group col-6 col-md-6 p-1">
                                <input type="text" class="form-control" placeholder="Apellido" />
                            </div>
                        </div>
                            <div class="form-group col-12 col-md-12 p-1">
                                <input type="email" class="form-control" placeholder="Correo"/>
                            </div>
                        <div class="d-flex py-2">
                            <div class="form-group col-6 col-md-6 p-1">
                                <label for="">Cantidad</label>
                                <input type="number" class="form-control" placeholder="Cantidad" />
                            </div>
                            <div class="form-group col-6 col-md-6 p-1">
                                <label for="">Categoría</label>
                                <select class="form-select" id="inputSelect">
                                    <option value="estudiante">Estudiante</option>
                                    <option value="junior">Junior</option>
                                    <option value="trainee">Trainee</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12 col-md-12 p-1 my-3">
                            <div class="alert alert-primary" role="alert" id="alert">
                                Total a Pagar: $
                            </div>
                        </div>
                    </div>
                    <div class="form-row d-flex gap-2 pb-1">
                        <button type="reset" class="btn btn-lg btn-success btn btn-outline-light col-6" id="btn-borrar">Borrar</button>
                        <button type="button" class="btn btn-lg btn-success btn btn-outline-light col-6" id="btn-resumen">Resumen</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;
  document
    .getElementById("btn-resumen")
    .addEventListener("click", mostrarTicket);
  document.getElementById("btn-borrar").addEventListener("click", borrarTicket);
};

//TODO: el type del botón Resumen es "button". En el form la action es index.html y el método es POST

const calcularTicket = (perc1, perc2, perc3) => {
  const precioTicket = 200;
  let datos = document.querySelectorAll("input");
  let opcionElegida = document.getElementById("inputSelect");

  let usuario = {
    cantidadEntradas: datos[3].value,
    categoria: opcionElegida.value,
  };

  let subTotal, total;

  if (usuario.categoria === "trainee") {
    subTotal = precioTicket * perc1;
  } else if (usuario.categoria === "junior") {
    subTotal = precioTicket * perc2;
  } else {
    subTotal = precioTicket * perc3;
  }

  total = subTotal * usuario.cantidadEntradas;

  return total;
};

const mostrarTicket = () => {
  let total = calcularTicket(0.5, 0.85, 0.2);

  let alertTotalAPagar = document.getElementById("alert");
  alertTotalAPagar.innerHTML = `
        Total a Pagar: $${total}
    `;
};

const borrarTicket = () => {
  let alertTotalAPagar = document.getElementById("alert");
  alertTotalAPagar.innerHTML = `
          Total a Pagar: $
      `;
};
