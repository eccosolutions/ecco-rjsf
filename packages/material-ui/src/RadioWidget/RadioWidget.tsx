import React from "react";

import {FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';

import {WidgetProps} from "@eccosolutions/rjsf-core";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({}, value: any) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const row = options ? options.inline : false;

  return (
    <>
      <FormLabel required={required} htmlFor={id}>
        {label || schema.title}
      </FormLabel>
      <RadioGroup
        value={`${value}`}
        row={row as boolean}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}>
        {(enumOptions as any).map((option: any, i: number) => {
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

          return (
              <FormControlLabel
                  control={<Radio color="primary" key={i}/>}
                  label={`${option.label}`}
                  value={`${option.value}`}
                  key={i}
                  disabled={disabled || itemDisabled || readonly}
              />
          );
        })}
      </RadioGroup>
    </>
  );
};

export default RadioWidget;
