import React                   from 'react';
import { Field, Form, Formik } from "formik";
import { Row, Col }            from "../external/Grid";
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
            <Col lg={ 3 } className="mt-2">
              <span className="text-left">Search videos:</span>
            </Col>

            <Col xs={ 12 } sm={ 12 } lg={ 9 }>
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
