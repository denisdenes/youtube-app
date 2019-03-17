import React  from "react";
import Select from "react-select";

export class AutocompleteField extends React.Component {
  render() {
    const { name, label, options, isMulti, error, touched } = this.props;

    return (
      <div>
        <Select
          name={ name }
          placeholder={ label }
          options={ options }
          isMulti={ isMulti }
          value={ this.props.value }
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
