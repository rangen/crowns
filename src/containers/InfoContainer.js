import React from 'react'
import { useSelector } from 'react-redux'

const InfoContainer = () => {
  const pol = useSelector(s=>s.selected)
  return (
    <>
      <h1>{pol.candidateName}</h1>
      <img src={pol.photoUrl === 'https://cdn.ballotpedia.org/images/thumb/0/0c/BP-Initials-UPDATED.png/40px-BP-Initials-UPDATED.png' ? 'https://cdn.ballotpedia.org/images/thumb/f/fb/Silhouette_Placeholder_Image.png/150px-Silhouette_Placeholder_Image.png' : pol.photoUrl}></img>
      {pol.incumbent === 'I' && <h3>Incumbent</h3>}
    </>
  )
}

export default InfoContainer