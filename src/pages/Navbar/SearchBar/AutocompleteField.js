import React  from "react";
import Select from "react-select";

export class AutocompleteField extends React.Component {
  render() {
    const { name, label, options, isMulti, error, touched, form, field } = this.props;

    return (
      <div>
        <Select
          name={ name }
          placeholder={ label }
          options={ options }
          isMulti={ isMulti }
          value={ this.props.value }
          onChange={ async (option) => {
            form.setFieldValue(field.name, option.value);
            await form.handleChange(option.value);
            form.submitForm();
          } }
        />
        { !!error && touched && (
          <div style={ { color: "red", marginTop: ".5rem" } }>
            { error }
          </div>
        ) }
      </div>
    );
  }
}
