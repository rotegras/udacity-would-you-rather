import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PercentageBar.style';


function PercentageBar({ text, percentage}) {
  return (
    <S.Wrapper>
      <S.Inner percentage={percentage} />
      <S.Text percentage={percentage}>
        {`${text} votes / ${percentage}`}
      </S.Text>
    </S.Wrapper>
  )
}

PercentageBar.propTypes = {
  text: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
}

export default PercentageBar;

