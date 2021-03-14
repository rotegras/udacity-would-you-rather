import React from 'react';
import {  Card, Col } from '../../theme/Layout';
import Button from '../Button';
import PATHS from '../../data/CONSTANTS';


export default function NoResultsToShow() {
  return (
    <Card>
      <Col>
        <h5>
          There are no questions to show
        </h5>
        <Button
          role='link'
          to={PATHS.ADD}
          name='Add a new question'
        />
      </Col>
    </Card>
 )
}
