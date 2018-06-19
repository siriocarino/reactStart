import React, { Component } from 'react';
import Card from './components/card';
import ProductItem from './components/product-item';
import AddItem from './components/addItem'

import './App.css';

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'IPHONE',
    price: 200
  }
]

localStorage.setItem("products" , JSON.stringify(products) );

class App extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);

    this.state = {
      subtitle: "this is subtitle",
      name: 'initial Name',
      title: 'initial title',
      showTitle: true,
      products: JSON.parse(localStorage.getItem("products"))
    }
  }

  componentWillMount() {
   const product =  this.getProducts()
   this.setState({ products });

  }

  getProducts(){
    return this.state.products
  }
  clickMenu() {
    alert("clicked");
  }
  changeSubtitle() {
    this.setState({
      name: 'new App Name',
      subtitle: 'new App title'
    });
  }
  onChange(event) {
    let value = event.target.value;
    this.setState = ({ name: event.target.value })
    console.log(value)
  }
  onSubmit(event) {
    event.preventDefault();
    alert(this.input.value)
  }

  renderTitle() {
    if (!this.state.showTitle) { return null };
    return <h1>{'pippo title'}</h1>

  }
  onAdd(name,price){
    const products = this.getProducts();
    products.push({
      name,
      price
    })
    this.setState({products})
  }
  onDelete(name){
    console.log(name)
    const products = this.getProducts();
    const filteredProducts = products.filter( product => {
      return product.name !== name;
    })

    this.setState({products:filteredProducts})
    console.log(filteredProducts)
  }
  render() {
    const list = [
      'Home',
      'Company',
      'Service',
      'Contact',
    ];

    return (
      <div className="App">
        {this.renderTitle()}
        <h2>{this.state.subtitle}</h2>
        <button onClick={this.changeSubtitle}>Change</button>
        <h4>Product Manager</h4>
        {
          this.state.products.map( product => {
            return(
             <ProductItem
             key={product.name} 
              {...product}
              onDelete={this.onDelete}
             />
            )
          })
        }
        <AddItem 
          onAdd={this.onAdd}
        />
        <div>{list.map(item => {
          return (
            <div onClick={this.clickMenu} >{item}</div>
          )
        })}
          <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} ref={input => { input = this.input = input }} />
            <Card
              title={this.state.title}
              name={this.state.name}
              onClick={this.onDelete}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
