import React, { Component } from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage/errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';

export default class housePage extends Component {

    gotService = new gotService()

    state = {
        selectedHouse: 1,
        error: false
    }

    onItemSelected = (id) => {
        console.log(id)
        this.setState({
            selectedHouse: id + 1
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
                getData={this.gotService.getAllHouses}
                renderItem={({ name, region }) => `${name} (${region})`} />
        )

        const houseDetails = (
            <ItemDetails getData={this.gotService.getHouses} itemId={this.state.selectedHouse}>
                <Field field='region' label='Regoion'></Field>
                <Field field='words' label='Words'></Field>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={houseDetails} />
        )
    }
}