import React from 'react'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'

export default function Contacto({contacto,handelEliminar}) {
  return (
    <ContainerCard>
      <div className="header">
        <FaTimes className='icon' onClick={() => handelEliminar(contacto.id)}/>
      </div>
      <div className="body">
        <div className="imagen">Imagen</div>
        <div className="datos">
        <span>{contacto.nombre}</span>
        <p>{contacto.telefono}</p>
        <p>{contacto.fnacimiento}</p>
        <p>{contacto.direccion}</p>
        <p>{contacto.correo}</p>
      </div>
      </div>

      
    </ContainerCard>
  )
}

const ContainerCard = styled.div`
  background-color: #fcfcfd48;
  padding: 1rem;
  border-radius: 20px;
  .header {
    display: flex;
    justify-content: end;
    padding: 0 0.5rem;
    .icon {
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      :hover {
        color:#ffffff91;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    .imagen {
      background-color: #000000;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      overflow: hidden;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .datos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      gap: 1rem;
      padding: 1rem;
      font-size: 20px;
      font-weight: 800;
    }
  }
`;