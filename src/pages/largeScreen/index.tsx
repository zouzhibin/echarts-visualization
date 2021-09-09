import React from 'react';
// @ts-ignore
import { FullScreenContainer } from '@jiaminghi/data-view-react';

import TopHeader from './Header'
import MainLeft from './MainLeft'
import MainCenter from './MainCenter'
import MainRight from './MainRight'
import UFullScreenContainer from '@/components/UFullScreenContainer'
import './css/index.less'

const Vindex: React.FC = () => {
  return (
    <div id="data-view">
      <UFullScreenContainer>
        <TopHeader/>
        <div className="main-content">
          <MainLeft/>
          <MainCenter/>
          <MainRight/>
        </div>
      </UFullScreenContainer>
    </div>
  );
};

export default Vindex;
