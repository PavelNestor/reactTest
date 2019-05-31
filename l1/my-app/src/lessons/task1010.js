import React from 'react';
import styles from './styles.module.scss';

export default function Task1010() {
  const [products, setProducts] = React.useState([
    { name: 'огурец', price: 10, quantity: 20, checked: true },
    { name: 'помидор', price: 15, quantity: 30, checked: true },
    { name: 'сыр', price: 20, quantity: 35, checked: true },
    { name: 'колбаса', price: 25, quantity: 25, checked: true },
    { name: 'молоко', price: 30, quantity: 55, checked: true },
  ]);

  const handleClick = num => {
    const newArr = products;
  
    newArr.splice(num, 1);
    setProducts(newArr.concat())
  };

  const handleClickAdd = newProduct => {
    setProducts(products.concat(newProduct))
  };

  const handleChecked = index => {
    // const obj = { checked: !products[index].checked };
    // products[index] = Object.assign({}, products[index], obj);
    // const newArr = products;
    // setProducts();
    // console.log(products);

    products[index].checked = !products[index].checked;
    setProducts(products.concat());
  };

  const view = products.map((item, index) =>
    <Product
      key={index}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      index={index}
      onHandleClick={handleClick}
      checked={item.checked}
      onHandleChecked={handleChecked}
    />);

  return (
    <table className={styles.table}>
      <thead>
        <tr >
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Стоимость</th>
          <th>Check</th>
          <th>Del</th>
        </tr>
      </thead>
      <tbody>
        <AddProduct
          onHandleClickAdd={handleClickAdd} />
        {view}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5" className={styles.AlignRight}>
            <Sum array={products.map(item => item.checked ? item.price * item.quantity : 0)} />
          </td>
        </tr>
      </tfoot>
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
      <td><input type="checkbox" name={props.index} checked={props.checked}
        onChange={() => props.onHandleChecked(props.index)} /></td>
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
      <td></td>
      <td><button onClick={() => props.onHandleClickAdd(product)}>add</button></td>
    </tr>
  );
};


const Sum = (props) => {
  return (
    <h5 className={styles.norm}>ВСЕГО: {props.array.reduce((sum, current) => {
      return sum + current;
    }, 0)}</h5>
  );
};


