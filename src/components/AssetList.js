import React, { Component } from 'react';

class AssetList extends Component {
    render() {
        return (
            <div>
                <ul className="listContainer">
                <h2>Assets</h2>
                {
                    this.props.assets.map((asset) => {
                        return (
                            <li className="listText" key={asset.id} onClick={ () => { this.props.selectAsset(asset) }}> { asset.name } </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default AssetList;