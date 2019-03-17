import React                   from 'react';
import { Field, Form, Formik } from "formik";
import { Row, Col }            from "../../../components/external/Grid";
import { AutocompleteField }   from "./AutocompleteField";

export const Searchbar = ({ categories }) => {
  return (
    <Formik
      initialValues={ {} }
      // validationSchema={validationSchema}
      onSubmit={ values => {
        console.log(values);
      } }
      render={ ({
                  values,
                  touched,
                  dirty,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  isSubmitting
                }) => (
        <Form onSubmit={ handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 } lg={ { span: 7, offset: 1 } }>
              <Field
                name='search'
                label='Search videos'
                component={ AutocompleteField }
                isMulti={ false }
              />
            </Col>

            <Col xs={ 12 } sm={ 12 } lg={ 4 }>
              <Field
                name='videoCategories'
                label='Categories'
                options={ categories }
                component={ AutocompleteField }
                isMulti={ false }
              />
            </Col>
          </Row>
        </Form>
      ) }
    />
  );
};
