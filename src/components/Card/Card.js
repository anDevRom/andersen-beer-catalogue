import React from 'react';
import styles from './Card.module.css';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            descriptionIsVisible: false
        }

        this.toggleDescription = this.toggleDescription.bind(this)
        this.hideDescription = this.hideDescription.bind(this)
    }

    toggleDescription() {
        this.setState({descriptionIsVisible: !this.state.descriptionIsVisible})
    }

    hideDescription() {
        this.setState({descriptionIsVisible: false})
    }

    render() {
        return (
            <div className={styles.card} onMouseLeave={this.hideDescription}>
                <img className={styles.img} src={this.props.card['image_url']} alt=""/>
                {
                    this.state.descriptionIsVisible ? (
                        <div className={styles.params}>
                            <p>{this.props.card.description}</p>
                        </div>
                    ) : (
                        <div className={styles.params}>
                            <h3>{this.props.card.name}</h3>
                            <ul>
                                <li>ABV: {this.props.card.abv}%</li>
                                <li>IBU: {this.props.card.ibu}</li>
                                <li>EBC: {this.props.card.ebc}</li>
                            </ul>
                            <div className={styles.checkbox}>
                                <input onChange={
                                    (e) => {
                                        this.props.checkBoxHandler(this.props.card.id, e.target.checked)
                                    }}
                                       type="checkbox"
                                       id="add-basket"
                                       checked={this.props.status}
                                />
                                <label htmlFor="add-basket">To basket</label>
                            </div>
                        </div>
                    )
                }
                <button onClick={this.toggleDescription} className={styles.btn}>Description</button>
            </div>
        )
    }
}

export default Card;
