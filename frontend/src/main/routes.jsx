import React from 'react'
import { Switch, Route, HashRouter} from 'react-router-dom';

import Dashboard from '../dashboard/dashboard'
import BillingCicle from '../billingCycle/billingCycle'
import NotFound from '../common/notFound/notFound'

export default props => (    
        <Switch>
            <Route path="/" exact component={ Dashboard }/>
            <Route path="/billingCycles" exact component={BillingCicle} />
            <Route path='*' component={NotFound} />
        </Switch>
)