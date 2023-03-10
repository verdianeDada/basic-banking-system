const  SideBar= ({customers, setSelectedCustomer, selectedCustomer }) => {
    return (
        <div id="sidebar">
            <div className="title"><h2  > Customers' List</h2></div>
            <div id="customers-list">
                {customers.map( customer =>
                     <div key={customer.id.toString()} className={customer.id===selectedCustomer.id ? "name selected":"name"} 
                        onClick = {()=> {setSelectedCustomer(customer)}}>
                        <p>{customer.firstName} {customer.lastName}</p>
                     </div>)}
            </div>
        </div>
    )
}

 export default SideBar