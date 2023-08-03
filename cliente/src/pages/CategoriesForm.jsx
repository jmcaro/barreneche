import { Formik, Form } from "formik";
import { createCategories } from "../api/categories.api";

function CategoriesForm() {
  return (
    <div>
      <Formik
        initialValues={{
          categoria: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createCategories(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="categoria">Nombre de la Categoría</label>
            <input
              type="text"
              placeholder="Escriba la categoría"
              name="categoria"
              onChange={handleChange}
              value={values.categoria}
            />
            <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving ...":"Create"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CategoriesForm;
