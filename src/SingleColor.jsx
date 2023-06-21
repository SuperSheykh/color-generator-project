import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const SingleColor = ({ color, index }) => {
   const { weight, hex } = color

   const copyToClipboard = async (col) => {
      if (navigator.clipboard) {
         try {
            await navigator.clipboard.writeText(`#${col}`)
         } catch (error) {
            toast.error('Could not copy to clipboard', {
               position: 'top-center',
               autoClose: 1000,
               hideProgressBar: true,
            })
         }
      } else {
         toast.error('Clipboard not available.')
      }
      toast.success('Copied to clipboard!', {
         position: 'top-center',
         autoClose: 1000,
         hideProgressBar: true,
      })
   }

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
