import { Button } from 'antd';
import React from 'react';
import { map, range } from 'lodash';

import './Test.css';

export const Test: React.FC = () => (
  <div className="app">
    {map(range(4), (index) => (
      <div
        key={index}
        className='container'
      >
        <Button type='primary'>
          Button {index}
        </Button>
      </div>
    ))}
  </div>
);
