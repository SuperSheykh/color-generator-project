import React, { useState } from 'react'

const Form = ({ defaultColor, getColorsFromForm }) => {
   const [color, setColor] = useState(defaultColor)
   const handleSubmit = (e) => {
      e.preventDefault()
      getColorsFromForm(color)
   }
   return (
      <section className='container'>
         <h4>Color Generator: </h4>
         <form className='color-form' onSubmit={handleSubmit}>
            <input
               type='color'
               value={color}
               onChange={(e) => setColor(e.target.value)}
            />
            <input
               type='text'
               placeholder='#f15025'
               value={color}
               onChange={(e) => setColor(e.target.value)}
            />
            <button type='submit' className='btn' style={{ background: color }}>
               Submit
            </button>
         </form>
      </section>
   )
}

export default Form
