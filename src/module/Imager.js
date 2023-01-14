import React  from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import gender_button from '../img/imager/gender_button.png';
import gender_button_a from '../img/imager/gender_button_a.png';

const ImagerCore = styled.div`
  width: 259px;
  height: 235px;
  background-color: rgba(0, 0, 0, 10%);
`

const GenderWrap = styled.div`
  width: 67px;
  height: 24px;
  position: relative;
  margin: 0 auto;
`

const Girl = styled.div`
  width: 14px;
  height: 24px;
  display: inline-block;
`

const Boy = styled.div`
  width: 14px;
  height: 24px;
  float: right;
`

const GenderLabel = styled.div`
  font-family: Volter;
  font-size: 9px;
  line-height: 7px;
`

const GenderButton = styled.button`
  background-image: url(${gender_button});
  width: 12px;
  height: 12px;
  border: 0;
  bottom: 0;

  ${props => (props.checked) && css`
        background-image: url(${gender_button_a});
        width: 12px;
        height: 12px;`
    };
`

function Imager() {
  return (
    <>
      <ImagerCore>
        <GenderWrap>
          <Girl>
            <GenderLabel>Girl</GenderLabel>
            <GenderButton />
          </Girl>
          <Boy>
            <GenderLabel>Boy</GenderLabel>
            <GenderButton />
          </Boy>
        </GenderWrap>
      </ImagerCore>
    </>
  );
}

export default Imager;
