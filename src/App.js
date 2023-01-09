import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CustomerDetails from './components/CustomerDetails'


const App = () => {
  const  [customers, setCustomers] = useState(
    [
      {
        Id: 1,
        firstName: "Krish",
        lastName: "Lee",
        phone: 11111111,
        email: "krish.lee@gmail.com",
        currentBalance: 200000
      },
      {
        Id: 2,
        firstName: "racks",
        lastName: "jacson",
        phone: 2222222,
        email: "racks.jacson@gmail.com",
        currentBalance: 200000
      },
      {
        Id: 3,
        firstName: "denial",
        lastName: "roast",
        phone: 33333333,
        email: "denial.roast@gmail.com",
        currentBalance: 200000
      },
      {
        Id: 4,
        firstName: "devid",
        lastName: "neo",
        phone: 44444444,
        email: "devid.neo@gmail.com",
        currentBalance: 200000
      },
      {
        Id: 5,
        firstName: "jone",
        lastName: "mac",
        phone: 55555555,
        email: "jone.mac@gmail.com",
        currentBalance: 200000
      },
      {
        Id: 6,
        firstName: "verdiane",
        lastName: "dada",
        phone: 66666666,
        email: "dada.verdiane@gmail.com",
        currentBalance: 200000
      },
      // {
      //   Id: 7,
      //   firstName: "Krish",
      //   lastName: "Lee",
      //   phone: 11111111,
      //   email: "krish.lee@gmail.com",
      //   currentBalance: 200000
      // },
      // {
      //   Id: 8,
      //   firstName: "racks",
      //   lastName: "jacson",
      //   phone: 2222222,
      //   email: "racks.jacson@gmail.com",
      //   currentBalance: 200000
      // },
      // {
      //   Id: 9,
      //   firstName: "denial",
      //   lastName: "roast",
      //   phone: 33333333,
      //   email: "denial.roast@gmail.com",
      //   currentBalance: 200000
      // },
      // {
      //   Id: 10,
      //   firstName: "devid",
      //   lastName: "neo",
      //   phone: 44444444,
      //   email: "devid.neo@gmail.com",
      //   currentBalance: 200000
      // },
      // {
      //   Id: 11,
      //   firstName: "jone",
      //   lastName: "mac",
      //   phone: 55555555,
      //   email: "jone.mac@gmail.com",
      //   currentBalance: 200000
      // },
      // {
      //   Id: 12,
      //   firstName: "verdiane",
      //   lastName: "dada",
      //   phone: 66666666,
      //   email: "dada.verdiane@gmail.com",
      //   currentBalance: 200000
      // }
    ]
  )
  const [transfers, setTransfers] = useState([])
  const [selectedCustomer, SetSelectedCustomer] = useState()
  const [welcome, setWelcome] = useState(true)

  return (
    <>
      <Header />
      <SideBar customers={customers} />
      <CustomerDetails welcome={welcome} />
      <Footer />
    </>
  )
}

export default App