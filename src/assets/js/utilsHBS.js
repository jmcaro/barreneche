//funcion para cargar datos de formulario
export function addFormValue(data) {
  if (data) {
    const valueForm = data.attribute;
    return valueForm;
  }
}
export function yell(msg) {
  return msg.toUpperCase();
}

export function deleteConfirmation(id) {
  let rol = document.getElementById("deleteModal");
  rol.showModal();
  let form = document.getElementById("formDeleteRol");
  form.setAttribute("action", `/roles/delete/${id}`);
}
