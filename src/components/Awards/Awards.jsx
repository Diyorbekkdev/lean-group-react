import React, { Component } from 'react';
import Slide from './slide';
import './award.scss';

export class Awards extends Component {
  render() {
    return (
      <div className="container award">
        <h2>
          Качество продукции подтверждают <span>сертификаты</span>
        </h2>
        <div className="slider">
          <Slide/>
        </div>
      </div>
    );
  }
}

export default Awards;