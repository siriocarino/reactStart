import React, { Component } from 'react';
import Prototypes from 'prop-types';
import { prototype } from 'events';

const prototypes = {
    name: Prototypes.string.isrequired,
    title: Prototypes.string.any,
    onClicked: prototype.func

}
const defaultProps = {
    name:'defaul Name',

}

class Card extends Component {

    render() {
        const { title, name, onClickComponent } = this.props;
        return (
            <div className="Catd">
                <h3>{ title }</h3>
                <h4>Name : { name }</h4>
                <button onClick={ onClickComponent }>Ckick me</button>
            </div>
        )
    }
}
Card.prototypes =  prototypes;
Card.defaultProps = defaultProps;
export default Card;
