import React from 'react';
import styles from './styles.module.scss';

export default function Task117() {
  const [products, setProducts] = React.useState([
    { name: 'огурец', price: 10, quantity: 20},
    { name: 'помидор', price: 15, quantity: 30},
    { name: 'сыр', price: 20, quantity: 35},
    { name: 'колбаса', price: 25, quantity: 25},
    { name: 'молоко', price: 30, quantity: 55},
]);

const handleClick = num => {
  const newArr = products;
  newArr.splice(num, 1);
  setProducts(newArr.concat())
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


