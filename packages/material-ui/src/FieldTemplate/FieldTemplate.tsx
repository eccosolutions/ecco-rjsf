import React from "react";

import { FieldTemplateProps } from "@eccosolutions/rjsf-core";

import { FormControl, Typography, List, ListItem, FormHelperText } from '@material-ui/core';

import WrapIfAdditional from "./WrapIfAdditional";

const FieldTemplate = ({
  id,
  children,
  classNames,
  disabled,
  displayLabel,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  rawErrors = [],
  rawHelp,
  rawDescription,
  schema,
}: FieldTemplateProps) => {
  return (
    <WrapIfAdditional
      classNames={classNames}
      disabled={disabled}
      id={id}
      label={label}
      onDropPropertyClick={onDropPropertyClick}
      onKeyChange={onKeyChange}
      readonly={readonly}
      required={required}
      schema={schema}>
      <FormControl
        fullWidth={true}
        error={!!rawErrors.length}
        required={required}>
        {children}
        {displayLabel && rawDescription ? (
          <Typography variant="caption" color="textSecondary">
            {rawDescription}
          </Typography>
        ) : null}
        {rawErrors.length > 0 && (
          <List dense={true} disablePadding={true}>
            {rawErrors.map((error, i: number) => {
              return (
                <ListItem key={i} disableGutters={true}>
                  <FormHelperText id={id}>{error}</FormHelperText>
                </ListItem>
              );
            })}
          </List>
        )}
        {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
      </FormControl>
    </WrapIfAdditional>
  );
};

export default FieldTemplate;
