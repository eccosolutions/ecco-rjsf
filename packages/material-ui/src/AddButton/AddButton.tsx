import React from 'react';

import { AddButtonProps } from '@eccosolutions/rjsf-core';
import { Button } from '@material-ui/core';
import { Add } from "@material-ui/icons";



const AddButton: React.FC<AddButtonProps> = props => (
  <Button {...props} color="secondary">
    <Add /> Add Item
  </Button>
);

export default AddButton;
