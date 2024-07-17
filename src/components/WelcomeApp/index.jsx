import './index.css'

import { Component } from 'react';

class WelcomeApp extends Component {
    state = {
        isSubscried: false,
    }
    onClickSubscribe = () => {
        this.setState(prevState => ({ isSubscried: !prevState.isSubscried }))
    }
    buttonText = () => {
        const { isSubscried } = this.state

        return isSubscried ? 'SUBSCRIBED' : 'SUBSCRIBE';
    }



    render() {
        const buttonText = this.buttonText()
        return (
            <div className='container'>
                <h1 className='heading' >
                    Welcome
                </h1>
                <p className='description'>
                    Thank You! Happy Learning
                </p>
                <button className='button'
                    type='button'
                    onClick={ this.onClickSubscribe }>
                    { buttonText }
                </button>
            </div>
        )
    }

}


export default WelcomeApp