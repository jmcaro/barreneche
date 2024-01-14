function yell(msg) {
  return msg.toUpperCase();
}

function deleteConfirmation(id) {
  let rol = document.getElementById("deleteModal");
  rol.showModal();
  let form = document.getElementById("formDeleteRol");
  form.setAttribute("action", `/roles/delete/${id}`);
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
