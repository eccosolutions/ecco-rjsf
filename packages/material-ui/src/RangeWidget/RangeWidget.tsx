import React from "react";

import { FormLabel, Slider } from '@material-ui/core';

import { utils } from "@eccosolutions/rjsf-core";
import { WidgetProps } from "@eccosolutions/rjsf-core";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = ({}, value: any) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <FormLabel required={required} id={id}>
        {label}
      </FormLabel>
      <Slider
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        valueLabelDisplay="auto"
        {...sliderProps}
      />
    </>
  );
};

export default RangeWidget;
