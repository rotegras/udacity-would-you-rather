import React from 'react';
import {  Card, Col } from '../../theme/Layout';


export default function NoResultsToShow() {
  return (
    <Card>
      <Col>
        <h5>
          There are no questions to show
        </h5>
        <button>
          Add a question
        </button>
      </Col>
    </Card>
 )
}
