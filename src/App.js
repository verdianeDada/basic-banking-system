import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CustomerDetails from './components/CustomerDetails'
import axios from 'axios'


const App = () => {
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState({})
  const [receiverId, setReceiverId] = useState()
  const [amount, setAmount] = useState(100)

  // loading data from AWS API Gateway
  useEffect(() => {
    const api_url = "https://wkequqyb56.execute-api.us-east-1.amazonaws.com/dev"
    console.log(`${api_url}/customers`)
    axios
      .get(`${api_url}/customers`)
      .then(data => {
        
        
        const customers = data.data.customers
        setCustomers(customers)
        console.log('customers set')
        // setting the selected customer whose details should be viewed by default
        let selected = customers.length > 0 ? customers[0] : { id: -1 }
        setSelectedCustomer(selected)
      })
      .catch(err => console.log(err)
      )

  }, [])

  const transfer = (e) => {
    e.preventDefault()
    const receiver = customers.find(c => c.id === receiverId)
    console.log(receiverId)
    if (window.confirm(`Do you want to transfer $ ${amount} to ${receiver.firstName} ${receiver.lastName} ?`)) {

      if (receiver) {
        console.log(`lets tranfer ${amount} to ${receiver.firstName}`)
        const newSenderBalance = selectedCustomer.currentBalance - amount
        const newReceiverBalance = parseInt(receiver.currentBalance) + parseInt(amount)
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