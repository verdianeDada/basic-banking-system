import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CustomerDetails from './components/CustomerDetails'

const App = () => {
  const [welcome, setWelcome] = useState(true)

  return (
    <>
      <Header/>
      <SideBar/>
      <CustomerDetails welcome = {welcome}/>
      <Footer/>
    </>
  )
}

export default App