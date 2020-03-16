import React from 'react';
import BookResultsItem from './BookResultsItem';

function BookResults(props) {
    return (
        <div>
            {props.results.map(result => {
                return (
                    <BookResultsItem item={result} />
                )
            })}
        </div>
    );
}

export default BookResults;