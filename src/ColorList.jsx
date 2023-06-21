import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SingleColor from './SingleColor'
import Values from 'values.js'

const ColorList = ({ color }) => {
   const [colors, setColors] = useState(new Values(color).all(10))
   useEffect(() => {
      setColors(new Values(color).all(10))
   }, [color])
   const notify = (text) => {
      toast(text, {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'light',
      })
   }
   const copyToClipboard = async (col) => {
      try {
         await navigator.clipboard.writeText(col)
      } catch (error) {
         notify('Could not copy to clipboard')
      }
      notify('Copied to clipboard!')
   }

   return (
      <section className='colors'>
         {colors.map((color) => {
            return (
               <SingleColor
                  key={nanoid()}
                  color={color}
                  copyToClipboard={copyToClipboard}
               />
            )
         })}
         <ToastContainer />
      </section>
   )
}

export default ColorList
