import React  from "react";
import Select from "react-select";

export class AutocompleteField extends React.Component {
  render() {
    const { name, label, options, isMulti, error, touched, form, field } = this.props;
    const { values, setFieldValue, handleChange, submitForm }            = form;

    return (
      <Select
        name={ name }
        placeholder={ label }
        value={ values[ field.name ] }
        options={ options }
        isMulti={ isMulti }
        onChange={
          async values => {
            setFieldValue(field.name, values);
            await handleChange(values.value);
            submitForm();
          }
        }
      />

    );
  }
}
