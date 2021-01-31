import React from 'react';
import styles from './RegistartionForm.module.css';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this)
        this.changeInputHandler = this.changeInputHandler.bind(this)

        this.state = {
            'first-name': {
                value: '',
                isValid: false
            },
            'last-name': {
                value: '',
                isValid: false
            },
            'patronymic': {
                value: '',
                isValid: false
            },
            'e-mail': {
                value: '',
                isValid: false
            },
            'password': {
                value: '',
                isValid: false
            },
            'birth-date': {
                value: '',
                isValid: false
            }
        }
    }

    changeInputHandler(e) {
        this.setState({[e.target.id]: {
                value: e.target.value,
                isValid: true
            }})

    }

    submitForm(e) {
        e.preventDefault()
        const validationArray = Object.entries(this.state)

        for (let input of validationArray) {
            switch (input[0]) {
                case 'password':
                    if (input[1].value.length < 6) {
                        this.setState({
                            [input[0]]: {
                                value: this.state[input[0]].value,
                                isValid: false
                            }
                        })
                    }
                    break

                case 'e-mail':
                    const template = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

                    if (!template.test(input[1].value)) {
                        this.setState({
                            [input[0]]: {
                                value: this.state[input[0]].value,
                                isValid: false
                            }
                        })
                    }

                    break

                default:
                    if (input[1].value === '') {
                        this.setState({
                            [input[0]]: {
                                value: this.state[input[0]].value,
                                isValid: false
                            }
                        })
                    }
            }
        }

        // eslint-disable-next-line no-unused-expressions
        Object.values(this.state).every(input => input.isValid === true) ? this.props.closeRegistration() : null
    }

    render() {
        return (
            <div className={styles.form}>
                <div className={styles.header}>
                    <h3>REGISTRATION</h3>
                    <button onClick={this.props.closeRegistration} className={styles.btn}><b>X</b></button>
                </div>
                <hr/>
                <form>
                    <div className={styles['input-block']}>
                        <label htmlFor="first-name">First name</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['first-name'].isValid ? null : styles.invalid}
                               value={this.state['first-name'].value}
                               type="text"
                               id="first-name"/>
                        {
                            this.state['first-name'].isValid ? null : <p className={styles['invalid-value']}>Invalid value</p>
                        }
                    </div>
                    <div className={styles['input-block']}>
                        <label htmlFor="last-name">Last name</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['last-name'].isValid ? null : styles.invalid}
                               value={this.state['last-name'].value}
                               type="text"
                               id="last-name"/>
                        {
                            this.state['last-name'].isValid ? null : <p className={styles['invalid-value']}>Invalid value</p>
                        }
                    </div>
                    <div className={styles['input-block']}>
                        <label htmlFor="patronymic">Patronymic</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['patronymic'].isValid ? null : styles.invalid}
                               value={this.state['patronymic'].value}
                               type="text"
                               id="patronymic"/>
                        {
                            this.state['patronymic'].isValid ? null : <p className={styles['invalid-value']}>Invalid value</p>
                        }
                    </div>
                    <div className={styles['input-block']}>
                        <label htmlFor="e-mail">E-mail</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['e-mail'].isValid ? null : styles.invalid}
                               value={this.state['e-mail'].value}
                               type="email"
                               id="e-mail"/>
                        {
                            this.state['e-mail'].isValid ? null : <p className={styles['invalid-value']}>Invalid value</p>
                        }
                    </div>
                    <div className={styles['input-block']}>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['password'].isValid ? null : styles.invalid}
                               value={this.state['password'].value}
                               type="text"
                               id="password"/>
                        {
                            this.state['password'].isValid ? null : <p className={styles['invalid-value']}>Password must be bigger than 5</p>
                        }
                    </div>
                    <div className={styles['input-block']}>
                        <label htmlFor="birth-date">Birth date</label>
                        <input onChange={this.changeInputHandler}
                               style={{width: '75%', border: '1px solid grey', outline: 'none'}}
                               className={this.state['birth-date'].isValid ? null : styles.invalid}
                               value={this.state['birth-date'].value}
                               type="date"
                               id="birth-date"/>
                        {
                            this.state['birth-date'].isValid ? null : <p className={styles['invalid-value']}>Invalid value</p>
                        }
                    </div>
                    <button className={styles.btn} onClick={this.submitForm} type="submit">Registry</button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;
