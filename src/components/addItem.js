import React, { Component } from 'react';


class AddItem extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.nameInput.value,this.priceInput.value)
    }
    render() {
        const { name, price } = this.props;
        return (
            <div className="AddItem">
                <h3>Add Products</h3>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="add Name" ref={nameInput =>
                        this.nameInput = nameInput
                    } />
                <input placeholder="add Price" ref={priceInput =>
                        this.priceInput = priceInput
                    } />
                <button>ADD PRODUCTS</button>
                    <hr />
                </form>
            </div>
        );
    }
}

export default AddItem;
