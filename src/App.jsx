import { useEffect, useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
const App = () => {
   const [color, setColor] = useState('#f52230')

   return (
      <main>
         <Form color={color} setColor={setColor} />
         <ColorList color={color} />
      </main>
   )
}
export default App
