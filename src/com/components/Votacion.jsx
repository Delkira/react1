import React,{ useState } from 'react'
import './Votacion.css'

const Votacion = (props) => {
    // cont = 0 cont++ useState[cont, cont++]
    const [like, setLikes]= useState(0)
    const [compar, setcompar]= useState(0)

    const darLikes= () => {
        setLikes(like+1)
    } 
    const disLikes= () => {
        setLikes(like-1)
    }
    const compartir=() => {
        setcompar(compar +1)
    }
  return (
    <>
        <aricule className = 'red'>
            <h1 className='red-titulo'>{props.titulo}</h1>
            <img src={props.imagenk} className='imagen6'></img>
            <p className='red-desc'>{props.descripion}</p>
            <p className='red-likes'>Likes: {like}, Compartidos {compar}</p>
            <div className='red-boton'>
            <button onClick={darLikes}>Like</button>
            <button onClick={disLikes}>DisLike</button>
            <button onClick={compartir}>Compartir</button>
            </div>
        </aricule>
    </>
  )
}

export default Votacion