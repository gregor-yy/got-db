export default class gotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10"')
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(res)
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses/')
        return res.map(this._transformHouse)
    }

    getHouses = async (id) => {
        const res = await this.getResource(`/houses/${id}`)
        return this._transformHouse(res)
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books/')
        return res.map(this._transformBook)
    }

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`)
        return this._transformBook(res)
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}

