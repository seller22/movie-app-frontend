// LoadingStatesAndValidation.js
import React from 'react';

export const Loader = () => <div className="loader">Loading movies...</div>;

export const ErrorMessage = ({ message }) => (
  <div className="error">{message}</div>
);
