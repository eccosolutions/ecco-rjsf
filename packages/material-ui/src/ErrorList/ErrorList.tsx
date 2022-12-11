import React from 'react';


import { ErrorListProps } from '@eccosolutions/rjsf-core';
import { Paper, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Error as ErrorIcon } from '@material-ui/icons'

const ErrorList = ({ errors }: ErrorListProps) => (
  <Paper elevation={2}>
    <Box mb={2} p={2}>
      <Typography variant="h6">
        Errors
      </Typography>
      <List dense={true}>
        {errors.map((error, i: number) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <ErrorIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={error.stack} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Paper>
);

export default ErrorList;
