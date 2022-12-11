import React from "react";

import { Checkbox, FormControlLabel } from '@material-ui/core';

import { WidgetProps } from "@eccosolutions/rjsf-core";
import { utils } from "@eccosolutions/rjsf-core";

const { schemaRequiresTrueValue } = utils;

const CheckboxWidget = (props: WidgetProps) => {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    onBlur(event.target.id, event.target.value);
  };
  const _onFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    onFocus(event.target.id, event.target.value);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          checked={typeof value === "undefined" ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      }
      label={label}
    />
  );
};

export default CheckboxWidget;
