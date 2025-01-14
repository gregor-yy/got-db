import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import './itemList.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props
        getData()
            .then((itemList) => {
                console.log(itemList)
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const label = this.props.renderItem(item)
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(i)}>
                    {label}
                </li>
            )
        })
    }
    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return Spinner
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}