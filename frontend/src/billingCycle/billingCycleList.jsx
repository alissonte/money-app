import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { getList } from './billingCycleActions'

const BASE_URL = 'http://localhost:3003/api'

class BillingCycleList extends Component{

    constructor(props){
        super(props)
        this.state = { list:[] }
        //this.props.getList()
        this.getList()//funcionou --> promise pelo billingCycleAction não está funcionando
    }

    getList(){
        axios.get(`${BASE_URL}/billingCycles`)
        .then(resp => this.setState({ list: resp.data }))
    }

    

    renderRows(){
        //const list = this.state.list || []
        const list = this.props.list || []
        return list.map(bc => (
                <tr key={bc._id}>
                    <td>{bc.name}</td>
                    <td>{bc.month}</td>
                </tr>
            )
        )
    }

    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)