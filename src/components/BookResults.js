import React from 'react';
import BookResultsItem from './BookResultsItem';

function BookResults(props) {
    console.log(props)
    return (
        <div>
            {props.results.map(result => {
                return (
                    <BookResultsItem key={result.id} item={result} />
                )
            })}
        </div>
    )
}

export default BookResults;