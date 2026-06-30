

import React from 'react'
import Inline_01 from './styling/Inline_01'
import Internal_02 from './styling/Internal_02'
import External_03 from './styling/External_03'
import Module_04 from './styling/Module_04'
import BootStrap_05 from './styling/BootStrap_05'

const App = () => {
  return (
    <>

      {/* // inline css */}

      <Inline_01 />

      {/* // internal css */}

      <Internal_02 />

      {/* external; */}

      <External_03 />

      {/* modules */}

      <Module_04 />

      {/* third party */}

      <BootStrap_05 />
    </>

  )
}

export default App