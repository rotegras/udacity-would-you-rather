import React from 'react';
import * as L from '../../theme/Layout';


function Intro() {

  return (
    <L.Container>
      <L.Card>
        <L.Row>
          <L.Col>
            <h3>
              Would you rather?
            </h3>
          </L.Col>
          <L.Col>
            <L.Content>
              {`"Would you rather" is a react-redux web app to practice state management with redux`}
            </L.Content>
            <L.Content>
              Login to play the game.
            </L.Content>
          </L.Col>
        </L.Row>
      </L.Card>
    </L.Container>
  )
}


export default Intro;
