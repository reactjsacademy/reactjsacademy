import React from 'react';
import Box from '../layout/Box';

const Hr = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      mt: 6,
      mb: 6,
      ...sx,
    }}
    as="hr"
    {...rest}
  />
);

export default Hr;
