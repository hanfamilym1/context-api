import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

import PageOne from '../Components/PageOne'
import PageTwo from '../Components/PageTwo'
import PageThree from '../Components/PageThree'

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/1'element={<PageOne />} />
          <Route exact path='/2'element={<PageTwo />} />
          <Route exact path='/3'element={<PageThree />} />
        </Switch>
    </Router>
  )
}

export default Routes