import React,{useState} from 'react'
import ModalForm from './components/ModalForm'
import Navegacion from './components/Navegacion'
import toast, { Toaster } from "react-hot-toast";
import styled from 'styled-components';
import Contactos from './components/Contactos';

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [contactos, setContactos] = useState([]);
  const handelModal = () => setIsModal(!isModal)

  const handelsubmit = (valor) => {
    toast("Contacto guardado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos([...contactos, valor])
  }

  const handelEliminar = (id) => {
    const nuevoContactos = contactos.filter((contacto) => contacto.id !== id);
    toast("Contacto Eliminado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos(nuevoContactos);
  }

console.log(contactos)
  return (
    <div>
      <Toaster/>
      <Navegacion handelModal={handelModal}/>
      {
        isModal && <ModalForm handelModal={handelModal} handelsubmit={handelsubmit} />
      }
      <ContainerContactos>
        <Contactos contactos={contactos} handelEliminar={handelEliminar}/>
      </ContainerContactos>
      
    </div>
  )
}

const ContainerContactos = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
