import React from 'react';


function BookResultsItem(props) {
  const { item } = props;
  console.log({item})
    return (
      <ul>
          <li>
              <img src={item.volumeInfo.imageLinks.thumbnail} />
              <h2>{item.volumeInfo.title}</h2>
              <h3>{item.volumeInfo.authors}</h3>
              <h3>${item.saleInfo.listPrice.amount}</h3>
              <p>{item.volumeInfo.description}</p>
          </li>
      </ul>
    )
}

export default BookResultsItem;