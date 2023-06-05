import React, { Component } from 'react';
import './css/Newsletter.css';
class Newsletter extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className='Newsletter' id='newsletter'>
                <div className='textNews'>
                    <h1>Prijavi se na newsletter</h1>
                    <p>Naš newsletter vam pruža mogućnost da budete među prvima koji će saznati o najnovijim vijestima, događajima i aktivnostima. Bez obzira o čemu je riječ, uvijek ćete bit obaviješteni na vrijeme.</p>
                    <form>
                        <input type="text" value={inputValue} onChange={this.handleInputChange} placeholder='Vaše ime' required/>
                        <input type='email' placeholder='Vaš e-mail' required></input>
                        <button>Potvrdi</button>
                    </form>
                    <p>Hvala ti {inputValue} na prijavi!</p>
                </div>
            </div>
        );
    }
}

export default Newsletter;