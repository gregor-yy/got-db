import React, { Component } from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage/errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';

export default class bookPage extends Component {

    gotService = new gotService()

    state = {
        selectedBook: 1,
        error: false
    }

    onItemSelected = (id) => {
        console.log(id)
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({ name, numberOfPages }) => `${name} (${numberOfPages})`} />
        )

        const bookDetails = (
            <ItemDetails getData={this.gotService.getBook} itemId={this.state.selectedBook}>
                <Field field="numberOfPages" label='Number of pages'></Field>
                <Field field="publiser" label='Publiser'></Field>
                <Field field="released" label='Released'></Field>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails} />
        )
    }
}