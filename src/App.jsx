import { useEffect, useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
   const [colors, setColors] = useState(new Values('#f52230').all(10))

   const getColorsFromForm = (col) => {
      try {
         const theColors = new Values(col).all(10)
         setColors(theColors)
      } catch (error) {
         toast.error(error.message, {
            hideProgressBar: true,
            autoClose: 2000,
            position: 'top-center',
         })
      }
   }

   return (
      <main>
         <Form defaultColor='#f52230' getColorsFromForm={getColorsFromForm} />
         <ColorList colors={colors} />
         <ToastContainer />
      </main>
   )
}
export default App
