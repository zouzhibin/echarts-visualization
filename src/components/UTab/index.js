import React, { useState } from 'react';

export default (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id="u-tab-container">
      <ul className='tabs'>
        {
          ['逾期未报废', '逾期未检验'].map((item, index) => <li key={item} onClick={() => setActiveTab(index)} className={activeTab === index ? 'active' : null} >{item}</li>)
        }
      </ul>
    </div>
  )
}
