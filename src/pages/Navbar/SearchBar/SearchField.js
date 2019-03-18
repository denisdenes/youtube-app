import React, { Component } from "react";

export class SearchField extends Component {
  render() {
    const { form, field }                                     = this.props;
    const { values, setFieldValue, handleChange, submitForm } = form;

    return (
      <input
        className="form-control search-bar"
        placeholder="Search "
        value={ values[ field.name ] }
        onChange={
          async event => {
            setFieldValue(field.name, event.target.value);
            await handleChange(values.search);
            submitForm();
          }
        }
      />
    );
  }
}
