import React from 'react';
import { Spin } from 'antd';

/**
 * Defines a spinner element from ant design that is displayed when a page is loading.
 *
 * @returns {JSX.Element}
 */

const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;