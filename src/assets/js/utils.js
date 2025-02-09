function deleteConfirmation(id, path) {
  let rol = document.getElementById("deleteModal");
  rol.showModal();
  let form = document.getElementById("formDeleteRol");
  form.setAttribute("action", `${path}/${id}`);
}

function updateFillForm(id) {
  const rol = document.getElementById("updateModal");
  const rolName = document.getElementById(id).textContent;
  //console.log(rolName);
  const rolChange = rol.querySelector("#name");
  rolChange.setAttribute("value", rolName);
  rolChange.select();
  const form = document.getElementById("formUpdateRol");
  form.setAttribute("action", `/roles/edit/${id}?_method=PUT`);
  //form.setAttribute("value", rolName);
  rol.showModal();
}
function updateFillFormCat(id) {
  const cat = document.getElementById("updateModal");
  const catName = document.getElementById(id).textContent;
  const catDescription = document.getElementById(id + "1").textContent;
  //console.log(rolName);
  const catNameChange = cat.querySelector("#categoria");
  const catNDescriptionChange = cat.querySelector("#descripcion");
  catNameChange.setAttribute("value", catName);
  catNDescriptionChange.setAttribute("value", catDescription);
  catNameChange.select();
  const form = document.getElementById("formUpdateCat");
  form.setAttribute("action", `/categorias/edit/${id}?_method=PUT`);
  //form.setAttribute("value", rolName);
  cat.showModal();
}
function openResponseModal(responseId, path) {
  fetch(`/${path}/${responseId}`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('viewResponseContent').innerHTML = html;
      document.getElementById('viewResponse').showModal();
    })
    .catch(error => console.error('Error al cargar la respuesta:', error));
}
function showObservationModalId(responseId) {
document.getElementById('responseIdObservation').value = responseId;
observationResponse = document.getElementById(`or${responseId}`).textContent;
document.getElementById('observacionCampo').value = observationResponse;
document.getElementById('observacion').showModal();
}
