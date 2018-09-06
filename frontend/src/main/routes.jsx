import React from 'react'
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../dashboard2/dashboard2'
import BillingCicle from '../billingCycle/billingCycle'
import NotFound from '../common/template/notFound/notFound'

export default props => (    
        <Switch>
            <Route path="/" exact component={ Dashboard }/>
            <Route path="/billingCycles" exact component={BillingCicle} />
            <Route path='*' component={NotFound} />
        </Switch>
)