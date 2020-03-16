import React, { Component } from 'react';


class Filter extends Component {
    render() {
        return (
            <div>
                <label htmlFor="Print Type">Print Type:</label>
                <select>
                    <option>All</option>
                    <option>Books</option>
                    <option>Magazines</option>
                </select>
                
                <label htmlFor="Book Type">Book Type:</label>
                <select>
                    <option value="ebooks">Ebooks</option>
                    <option value="free-ebooks">Free Ebooks</option>
                    <option value="full">full</option>
                    <option value="paid-ebooks">Paid Ebooks</option>
                    <option value="partial">Partial</option>
                </select>
            </div>
        );
    }
}

export default Filter;