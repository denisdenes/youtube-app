import React                   from 'react';
import { Field, Form, Formik } from "formik";
import { Row, Col }            from "../../../components/external/Grid";
import { AutocompleteField }   from "./AutocompleteField";

export const CategorySelect = ({ initialValues, categories, onSubmit }) => {
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
          <Row noGutters>
            <Col lg={ { span: 3, offset: 4 } } className="mt-2">
              <span className="ml-5">Most popular from:</span>
            </Col>

            <Col xs={ 12 } sm={ 12 } lg={ 5 }>
              <Field
                name='videoCategory'
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
