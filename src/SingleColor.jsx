import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const SingleColor = ({ color, index, copyToClipboard }) => {
   const { weight, hex } = color

   return (
      <article
         className={index > 10 ? 'color color-light' : 'color'}
         style={{ backgroundColor: `#${hex}` }}
         onClick={() => copyToClipboard(hex)}
      >
         <p className='percent-value'>{weight}%</p>
         <p className='color-value'>#{hex}</p>
      </article>
   )
}

export default SingleColor
