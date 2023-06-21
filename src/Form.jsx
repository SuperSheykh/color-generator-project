import React, { useState } from 'react'

const Form = ({ color, setColor }) => {
   const [formColor, setFormColor] = useState(color)
   const handleSubmit = (e) => {
      e.preventDefault()
      setColor(formColor)
   }
   return (
      <section className='container'>
         <h4>Color Generator: </h4>
         <form className='color-form' onSubmit={handleSubmit}>
            <input
               type='color'
               value={formColor}
               onChange={(e) => setFormColor(e.target.value)}
            />
            <input
               type='text'
               placeholder='#f15025'
               value={formColor}
               onChange={(e) => setFormColor(e.target.value)}
            />
            <button
               type='submit'
               className='btn'
               style={{ background: formColor }}
            >
               Submit
            </button>
         </form>
      </section>
   )
}

export default Form
