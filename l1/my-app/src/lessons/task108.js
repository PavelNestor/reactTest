import React from 'react';
import styles from './styles.module.scss';

export default function Task108() {
  const [products, setProducts] = React.useState([
    { name: 'огурец', price: 10, quantity: 20 },
    { name: 'помидор', price: 15, quantity: 30 },
    { name: 'сыр', price: 20, quantity: 35 },
    { name: 'колбаса', price: 25, quantity: 25 },
    { name: 'молоко', price: 30, quantity: 55 },
  ]);

  const handleClick = num => {
    const newArr = products;
    newArr.splice(num, 1);
    setProducts(newArr.concat())
  };

  const handleClickAdd = newProduct => {
    setProducts(products.concat(newProduct))
  };

  const view = products.map((item, index) =>
    <Product
      key={index}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      index={index}
      onHandleClick={handleClick}
    />);

  return (
    <table className={styles.table}>
      <thead>
        <tr >
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Стоимость</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <AddProduct
          onHandleClickAdd={handleClickAdd} />
        {view}
      </tbody>
    </table>
  );
}


const Product = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>{props.price * props.quantity}</td>
      <td><button onClick={() => props.onHandleClick(props.index)}>del</button></td>
    </tr>
  );
};

const AddProduct = (props) => {
  const [product, setProduct] = React.useState({
    name: '',
    price: 0,
    quantity: 0,
  });

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'name') {
      setProduct(Object.assign({}, product, { name: value }))
    } else if (name === 'price') {
      setProduct(Object.assign({}, product, { price: +value }))
    } else {
      setProduct(Object.assign({}, product, { quantity: +value }))
    };
  };

  return (
    <tr>
      <td><input type="text" name='name' onChange={handleChange} /></td>
      <td><input type="text" name='price' onChange={handleChange} /></td>
      <td><input type="text" name='quantity' onChange={handleChange} /></td>
      <td></td>
      <td><button onClick={() => props.onHandleClickAdd(product)}>add</button></td>
    </tr>
  );
};


