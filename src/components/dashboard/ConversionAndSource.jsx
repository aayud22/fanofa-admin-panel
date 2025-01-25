import React from 'react';
import VisitorSources from './VisitorSources';
import ConversionRate from './chart/ConversionRate';

const ConversionAndSource = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ConversionRate />
      <VisitorSources />
    </div>
  );
};

export default ConversionAndSource;
