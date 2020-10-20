import React from "react";
import { FieldTemplateProps } from "@eccosolutions/rjsf-core";
import { Text } from "@fluentui/react";
import { List } from "@fluentui/react";

const FieldTemplate = ({
  id,
  children,
  rawErrors = [],
  rawHelp,
  rawDescription,
  classNames
}: FieldTemplateProps) => {
  // TODO: do this better by not returning the form-group class from master.
  classNames = "ms-Grid-col ms-sm12 " + classNames.replace("form-group", "");
  return (
    <div className={classNames} style={{marginBottom: 15}}>
      {children}
      {/* {displayLabel && <Label>
        {label}
        {required && <span style={{color: "rgb(164, 38, 44)", fontSize: "12px", fontWeight: "normal"}}>*</span>}
      </Label>} */}
      {rawDescription && <Text>{rawDescription}</Text>}
      {rawErrors.length > 0 && <List items={rawErrors}>error...</List>}
      {rawHelp && <Text id={id}>{rawHelp}</Text>}
    </div>
  );
};

export default FieldTemplate;
