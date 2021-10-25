import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock'
import ItemDetails, { Field } from '../itemDetails/itemDetails';

export default class characterPage extends Component {

    gotService = new gotService()

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        console.log(id)
        this.setState({
            selectedChar: 41 + id
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
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`} />
        )

        const charDetails = (
            <ItemDetails getData={this.gotService.getCharacter} itemId={this.state.selectedChar}>
                <Field field="gender" label='Gender'></Field>
                <Field field="born" label='Born'></Field>
                <Field field="died" label='Died'></Field>
                <Field field="culture" label='Culture'></Field>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )
    }
}