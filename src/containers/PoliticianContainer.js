import React from 'react'
import { useSelector } from 'react-redux'

const PoliticianContainer = () => {
  const pol = useSelector(s=>s.selected)
  
  return (
    <>
      <h3>{pol.candidateName}</h3>
    </>
  )
}


export default PoliticianContainer