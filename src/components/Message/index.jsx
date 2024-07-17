import './index.css'

const Message = props => {
    const { isLoggedIn } = props
    const message = isLoggedIn ? 'Welcome User' : 'Please LogIn'

    return <h1 className='meessage'> { message }</h1>
}

export default Message;