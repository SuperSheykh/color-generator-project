import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const SingleColor = ({ color, copyToClipboard }) => {
   const { weight, hex } = color

   return (
      <article
         className='color'
         style={{ backgroundColor: `#${hex}` }}
         onClick={() => copyToClipboard(hex)}
      >
         <p className=''>{weight}%</p>
         <p className=''>#{hex}</p>
      </article>
   )
}

export default SingleColor
