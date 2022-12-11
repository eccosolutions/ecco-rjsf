import React from 'react';

import { FieldProps } from '@eccosolutions/rjsf-core';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 5,
  },
});

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    const classes = useStyles();

    return (
      <Typography variant="subtitle2" className={classes.root}>
        {description}
      </Typography>
    );
  }

  return null;
};

export default DescriptionField;
