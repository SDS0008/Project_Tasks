
import { Component } from 'react';
import './index.css'



class Speedometer extends Component {
    state = { count: 0 }


    accelerate = () => {

        this.setState(prevState =>
            prevState.count < 399 ? { count: prevState.count + 20 } : { count: 399 }
        )
    }


    brake = () => {

        this.setState(prevState =>
            prevState.count > 0 ? { count: prevState.count - 10 } : { count: 0 }
        )
    }


    render() {
        const { count } = this.state

        return (
            <div className='speedometer-bg-container'>
                <div>
                    <h1 className='speedometer-heading'>
                        Speedometer
                    </h1>
                    <img
                        className='speedometer-img'
                        src='https://tse1.mm.bing.net/th?id=OIP.8KYd1ZYf8aVPlUXoBgmldwHaHa&pid=Api&P=0&h=220'
                        alt='SPEEDOMETER' />


                    <h2 className='speedometer-speed'>
                        Speed is <span>{ count } MPH</span>
                    </h2>

                    <p className='speedometer-warning'>
                        Min Limit is 0 MPH, Max Limit is 399MPH
                    </p>

                    <div>
                        <button
                            type='button'
                            className='btn-accelerate'
                            onClick={ this.accelerate }>

                            Accelerate

                        </button>
                        <button
                            type='button'
                            className='btn-brake'
                            onClick={ this.brake }>

                            Apply Brake

                        </button>
                    </div>


                </div>
            </div>
        )
    }
}











export default Speedometer;