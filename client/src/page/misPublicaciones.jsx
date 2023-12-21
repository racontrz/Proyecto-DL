
import React from 'react'
import Perfil from './Perfil'
import CardMisPublicaciones from './CardMisPublicaciones'

const Publicaciones = () => {
  return (
    <div>
      <Perfil />
      <div>
        <h1 className="text-center mt-5">Publicaciones</h1>
      </div>
      <CardMisPublicaciones />
    </div>
  )
}

export default Publicaciones