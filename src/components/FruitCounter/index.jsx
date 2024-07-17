import { Component } from 'react';
import './index.css'


class FruitCounter extends Component {
    state = {
        mangoCount: 0,
        bananaCount: 0,
    }

    onClickEatMango = () => {
        this.setState(prevState => ({ mangoCount: prevState.mangoCount + 1 }))
    }


    onClickEatBanana = () => {
        this.setState(prevState => ({ bananaCount: prevState.bananaCount + 1 }))
    }


    render() {

        const { mangoCount, bananaCount } = this.state

        return (
            <div className='fruits-counter-container'>
                <div className='fruits-counter'>
                    <h1 className='count-text' >
                        Bob  Ate <span className='count' >{ mangoCount }</span>Mangoes
                        <span className='count' >{ bananaCount }</span>Bananas
                    </h1>
                    <div className='counters-control-container'>

                        <div className='counter-control'>
                            <img src='https://thumbs.dreamstime.com/b/personaje-kawaii-mango-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o-caracteres-230318878.jpg'
                                alt='Mango'
                                className='fruit-imgae'
                            />
                            <div className='button-container'>
                                <button className='button' type='button'
                                    onClick={ this.onClickEatMango } >Eat Mango</button>
                            </div>
                        </div>
                        <div className='counter-control'>
                            <img src='https://tse2.mm.bing.net/th?id=OIP.1HqQqVY8tbI3rOXbYnkbMAHaIK&pid=Api&P=0&h=220'
                                alt='Banana'
                                className='fruit-imgae'
                            />
                            <div className='button-container'>
                                <button className='button' type='button'
                                    onClick={ this.onClickEatBanana } >Eat Banana</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default FruitCounter;