import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Component } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import CharacterPage from '../characterPage/characterPage'
import CharDetails from '../itemDetails/itemDetails'
import ItemList from '../itemList';
import BookPage from '../Pages/bookPage/bookPage';
import HousePage from '../Pages/housePage/housePage'


export default class App extends Component {
    gotService = new gotService()
    state = {
        showRandomChar: true,
        error: false
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                        </Col>
                    </Row>
                    <button className='btn-show-charcters' onClick={() => this.toggleRandomChar()}>Show/Hide</button>
                    <CharacterPage />
                    <BookPage />
                    <HousePage />
                </Container>
            </>
        );
    }
};