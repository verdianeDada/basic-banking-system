import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CustomerDetails from './components/CustomerDetails'



const App = () => {
  const [customers, setCustomers] = useState(
    [
      {
        id: 1,
        firstName: "Krish",
        lastName: "Lee",
        phone: 11111111,
        email: "krish.lee@gmail.com",
        currentBalance: 200000
      },
      {
        id: 2,
        firstName: "racks",
        lastName: "jacson",
        phone: 2222222,
        email: "racks.jacson@gmail.com",
        currentBalance: 200000
      },
      {
        id: 3,
        firstName: "denial",
        lastName: "roast",
        phone: 33333333,
        email: "denial.roast@gmail.com",
        currentBalance: 200000
      },
      {
        id: 4,
        firstName: "devid",
        lastName: "neo",
        phone: 44444444,
        email: "devid.neo@gmail.com",
        currentBalance: 200000
      },
      {
        id: 5,
        firstName: "jone",
        lastName: "mac",
        phone: 55555555,
        email: "jone.mac@gmail.com",
        currentBalance: 200000
      },
      {
        id: 6,
        firstName: "verdiane",
        lastName: "dada",
        phone: 66666666,
        email: "dada.verdiane@gmail.com",
        currentBalance: 200000
      },
      {
        id: 7,
        firstName: "Krish",
        lastName: "Lee",
        phone: 11111111,
        email: "krish.lee@gmail.com",
        currentBalance: 200000
      },
      {
        id: 8,
        firstName: "racks",
        lastName: "jacson",
        phone: 2222222,
        email: "racks.jacson@gmail.com",
        currentBalance: 200000
      },
      {
        id: 9,
        firstName: "denial",
        lastName: "roast",
        phone: 33333333,
        email: "denial.roast@gmail.com",
        currentBalance: 200000
      },
      {
        id: 10,
        firstName: "devid",
        lastName: "neo",
        phone: 44444444,
        email: "devid.neo@gmail.com",
        currentBalance: 200000
      },
      {
        id: 11,
        firstName: "jone",
        lastName: "mac",
        phone: 55555555,
        email: "jone.mac@gmail.com",
        currentBalance: 200000
      },
      {
        id: 12,
        firstName: "verdiane",
        lastName: "dada",
        phone: 66666666,
        email: "dada.verdiane@gmail.com",
        currentBalance: 200000
      }
    ]
  )

  // loading data from Atlas MongoDb
//   useEffect(() => {
//     const url = `mongodb+srv://atlas:${password}@cluster0.chdfxaq.mongodb.net/?retryWrites=true&w=majority`
// mongoose
//     .connect(url)
//     .then(result => {
//         console.log('Connected')
//         return person.save()
//     })
//     .then(() => {
//         console.log('note saved')
//         return mongoose.connection.close()
//     })
//     .catch(error => console.log(error)
//     )
//   }, [])
  
  // setting the selected customer whose details should be viewed

    // console.log(selected)
  let selected = customers.length > 0 ? customers[0] : { id: -1 }
  const [selectedCustomer, setSelectedCustomer] = useState(selected)
  const [receiverId, setReceiverId] = useState()
  const [amount, setAmount] = useState(100)

  const transfer = (e) => {
    e.preventDefault()
    const receiver = customers.find(c => c.id === receiverId)
    console.log(receiverId)
    if (window.confirm(`Do you want to transfer $ ${amount} to ${receiver.firstName} ${receiver.lastName} ?`)) {

      if (receiver) {
        console.log(`lets tranfer ${amount} to ${receiver.firstName}`)
        const newSenderBalance = selectedCustomer.currentBalance - amount
        const newReceiverBalance = receiver.currentBalance + amount
        setCustomers(customers.map(customer => {
          // selectedCustomer = sender

          if (customer.id === receiverId) {

            return { ...customer, currentBalance: newReceiverBalance }
          }
          else if (customer.id === selectedCustomer.id)
            return { ...customer, currentBalance: newSenderBalance }
          else
            return customer
        }))
        setSelectedCustomer({ ...selectedCustomer, currentBalance: newSenderBalance })
        // setReceiverId()
        alert(`Successful transfer of ${amount} to ${receiver.firstName} ${receiver.lastName}`)
      }
      else
        alert("Operation failed! This receiver is not longer a customer of this bank")
    }
  }
  return (
    <>
      <Header />
      <SideBar setReceiverId={setReceiverId} selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} customers={customers} />
      <CustomerDetails amount={amount} setAmount={setAmount} receiverId={receiverId} setReceiverId={setReceiverId} transfer={transfer} selectedCustomer={selectedCustomer} customers={customers} />
      <Footer />
    </>
  )
}

export default App