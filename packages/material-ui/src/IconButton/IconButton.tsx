import React from "react";

import {
  Button
} from '@material-ui/core';

import { IconButtonProps as MuiIconButtonProps } from "@material-ui/core/IconButton";
import {Add, ArrowDownward, ArrowUpward, Remove} from "@material-ui/icons";

const mappings: any = {
  remove: <Remove />,
  plus: <Add />,
  "arrow-up": <ArrowUpward />,
  "arrow-down": <ArrowDownward />,
};

type IconButtonProps = MuiIconButtonProps & {
  icon: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return (
    <Button {...otherProps} size="small">
      {mappings[icon]}
    </Button>
  );
};

export default IconButton;
