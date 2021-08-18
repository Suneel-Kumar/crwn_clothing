import React, { Component } from 'react'

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shop.styles.scss'

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({ id, ...collection }) => <CollectionPreview key={id} {...collection} />)}
            </div>
        )
    }
}

export default Shop
