import {Link,Outlet}from "react-router-dom"



function Home() {
    
    return (<>
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/transactions">Transactions</Link>
        </nav>
        <Outlet/>
        </>
    );
}

export default Home