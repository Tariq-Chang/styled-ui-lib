import React from 'react';
import { Button as BootstrapButton } from 'bootstrap';

const Button = ({ label }) => {
  return <BootstrapButton>{label}</BootstrapButton>;
};

export default Button;
