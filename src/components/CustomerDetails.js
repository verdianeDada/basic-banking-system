
const CustomerDetails = ({ selectedCustomer, customers, transfer, amount, setAmount, receiverId, setReceiverId }) => {
    return (
        <div id="customer-details">
            {selectedCustomer.id === -1
                ? <div><h2>Not Customers Yet! Please add some</h2></div>
                : <>
                    <div className="section">
                        <div className="header"><h2 className="center" >Customer's information</h2></div>
                        <div className="content">
                            <p>First name: <strong className="capitalize">{selectedCustomer.firstName}</strong></p>
                            <p>Last name: <strong className="capitalize">{selectedCustomer.lastName}</strong></p>
                            <p>Phone number: <strong>{selectedCustomer.phone}</strong></p>
                            <p>Email address: <strong>{selectedCustomer.email}</strong></p>
                            <p>currentBalance: <strong>$ {selectedCustomer.currentBalance}</strong></p>
                        </div>
                    </div>
                    <div className="section">
                        <div className="header">
                            <h2 className="center" >New transaction</h2>
                        </div>
                        <div className="content">
                            <form onSubmit={transfer}>
                                <div id="fill">
                                    <div>
                                        <label htmlFor="receiver">Receiver: </label>
                                        <select defaultValue="" required value={receiverId} onChange={(e) => setReceiverId(parseInt(e.target.value))} id="receiver">
                                            <option disabled value="" >Select a receiver ...</option>
                                            {
                                                customers.map(customer => {
                                                    if (customer.id !== selectedCustomer.id)
                                                        return <option value={customer.id} key={customer.id} >{`${customer.firstName} ${customer.lastName}`}</option>
                                                    else
                                                        return null;
                                                })}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="amount">Amount ($):</label>
                                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" step="50" />
                                    </div></div>
                                <div id="submit">
                                    <button type="submit">Transfer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default CustomerDetails