import React                   from 'react';
import { Field, Form, Formik } from "formik";
import { Row, Col }            from "../../../components/external/Grid";
import { SearchField }         from "./SearchField";

export const Searchbar = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ values => {
        onSubmit(values)
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
            <Col xs={ 6 } sm={ 6 } lg={ 12 }>
              <Field
                name='search'
                label='Search videos'
                component={ SearchField }
                isMulti={ false }
              />
            </Col>
          </Row>
        </Form>
      ) }
    />
  );
};
