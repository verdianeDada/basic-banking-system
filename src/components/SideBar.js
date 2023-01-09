const  SideBar= ({customers}) => {
    return (
        <div id="sidebar">
            <div className="name title selected"> Transactions history</div>
            <p className="title" style={{paddingTop:45}}> Customers List</p>
            <div id="customers-list">
                {customers.map( customer => <div key={customer.id} className="name"><p>{customer.firstName} {customer.lastName}</p></div>)}
            </div>
        </div>
    )
}

 export default SideBar