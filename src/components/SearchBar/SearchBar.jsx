import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.search);
    actions.resetForm();
  };
  return (
    <>
      <header>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </>
  );
}
