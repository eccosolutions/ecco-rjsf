import React from 'react';

import { FieldProps } from '@eccosolutions/rjsf-core';

import {
    Typography,
    Box, Divider
} from '@material-ui/core';

const TitleField = ({ title }: FieldProps) => (
  <>
    <Box mb={1} mt={1}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Box>
  </>
);

export default TitleField;
