import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from "../OpenAccount"
import BrokerageCalculator from './BrokerageCalculator'

const Pricing = () => {
  return (
     <div style={{ backgroundColor: "#DBEAFE" }}>
    <Hero/>
    <Brokerage/>
    <OpenAccount/>
    <BrokerageCalculator/>
    
    </div>
  )
}

export default Pricing