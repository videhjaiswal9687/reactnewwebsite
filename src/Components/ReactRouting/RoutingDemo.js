import React, { Component } from 'react'
import {
    Link, BrowserRouter as Router, Route, Routes, useNavigate, Navigate, useParams,
    useLocation
} from 'react-router-dom'
import UserForm from '../ControlleredComponent/UserForm'
import Email from '../ChildComponent/Email'
import Profile from '../ChildComponent/Profile'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
/*
What is BrowserRouter
BrowserRouter is used for doing client side routing with URL segments.
When we are working with the router in react, in the background it manages 
history API of HTML5, I mean when we routing through different pages that time 
we should maintain history so that components will be available to route back
 again.Basically, it manages three different events which are listed below.

Link : Is a router API which allows accessing navigation throughout the application.

Route : It is used to render the user interface when any location matches.

<Routes></Routes> replaces <Switch></Switch> for finding error page

npm install react-router-dom 
*/
export default class RoutingDemo extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* <Header /> */}
                        <Navbar bg="dark" expand="lg">
                            <Container>
                                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Home</Nav.Link>
                                        <Nav.Link href="/login" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Login</Nav.Link>
                                        <Nav.Link href="/contact" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Contact</Nav.Link>
                                        <Nav.Link href="/about" style={{color:'white',fontSize:28,fontWeight:'bold'}}>AboutUs</Nav.Link>
                                        <Nav.Link href="/dashboard" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Dashboard</Nav.Link>
                                        <Nav.Link href="/electronics/:category" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Electronics</Nav.Link>
                                        <Nav.Link href="/about/profile" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Profile</Nav.Link>
                                        <Nav.Link href="/about/email" style={{color:'white',fontSize:28,fontWeight:'bold'}}>Email</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/user' element={<UserForm />}></Route>
                            <Route path='/contact' element={<Contact phone={7898765411} />}></Route>
                            <Route path='/about' element={<AboutUs />}></Route>
                            <Route path='/login' element={<Login isLogged={true} />}></Route>
                            <Route path='/dashboard' element={<Dashboard />}></Route>
                            <Route path='/electronics/:category' element={<Electronics />}></Route>
                            <Route path="*" element={<Error />}></Route>
                            <Route path='/electronics/:category/:id' element={<Electronics />}></Route>
                            <Route path='/about/profile' element={<Profile />}></Route>
                            <Route path='/about/email' element={<Email />}></Route>
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}
function Header() {
    return (
        <div>
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/user">UserDetails</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/electronics/mobile">Product</Link></li>
                <li><Link to="/electronics/mobile/12">Product With ID</Link></li>
            </ul>
        </div>
    )
}
const Electronics = () => {
    //Returns an object of key/value pairs of the dynamic params
    // from the current URL that were matched by the route path.
    const { category, id } = useParams();
    //Returns the current location object, which represents the current URL in web browsers.
    let location = useLocation();
    console.log(location)
    //this.props.match.params.category
    return (
        <div>
            <h1>Electronics Product Name:- {category}</h1>
            <h1>Electronics Product Id:- {id}</h1>
        </div>
    )
}
const PushComponent = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/contact")
    }
    return (
        <>
            <button type="button" onClick={handleClick}>
                Click Me!
            </button>

        </>
    )
}
function AboutUs() {
    return (
        <div style={{ backgroundColor: 'olive' }}>
            <h1>AboutUs Page!!</h1>
            <PushComponent />
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/about/email">Email</Link></li>
                <li><Link to="/about/profile">Profile</Link></li>
            </ul><hr></hr>
        </div>
    )
}
function Home() {
    return (
        <div style={{ backgroundColor: 'orange' }}>
            <h1>Home Page!!</h1>
        </div>
    )
}
function Error() {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1>Error 404</h1>
            <h2>Page not Found!!</h2>
        </div>
    )
}
const Login = (props) => {
    return (
        <div style={{ backgroundColor: 'blue' }}>
            {props.isLogged ? <Navigate to="/dashboard" /> : <h1>Please login</h1>}
        </div>
    )
}
const Dashboard = () => {
    let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>Dashboard Page!!</h1>
            <button onClick={() => navigate(-2)}>go back</button>
        </div>
    )
}
function Contact(props) {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/dashboard")
    }
    return (
        <div>
            <h1>Contact Page!! , Phone Number is:{props.phone}</h1>
            {/* <button onClick={() => navigate(-1)}>go back</button> */}
            <button onClick={handleClick}>NextScreen</button>
        </div>
    )
}
