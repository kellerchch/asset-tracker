import React, { Component } from 'react';

class AssetEditor extends Component {
    constructor() {
        super();
        this.state = {
            asset: null,
            originalAsset: null,
            notModified: true
        };
        
        this.save = this.save.bind( this );
        this.cancel = this.cancel.bind( this );
    }   
componentWillReceiveProps(props) {
    this.setState({ asset: Object.assign({}, props.selected), originalAsset: props.selected, notModified: true});
}
handleChange(prop, val) {
    if ( this.state.notModified ) {
        this.setState({ notModified: false });
    }
        var assetCopy = Object.assign({}, this.state.asset);
        assetCopy[prop] = val;
        this.setState({ asset: assetCopy });
    }

save() {
    this.state.originalAsset.updateName(this.state.asset.name);
    this.state.originalAsset.updatePrice(this.state.asset.price);
    this.state.originalAsset.updateBrand(this.state.asset.brand);
    this.setState({ notModified: true });
    this.props.refreshList();
    }
cancel() { 
    var assetCopy = Object.assign({}, this.state.originalAsset);
    this.setState({ asset: assetCopy, notModified: true });
}

render() {
    return (
        <div className="infoCard">
        {
            this.state.asset
            ?
            <div>
                
                {/* <p id="assetTitle">  { this.state.originalAsset.name } </p> */}
                
                <span className="placeholderText"> Name </span>
                <input className="materialInput" value={ this.state.asset.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>

                <span className="placeholderText"> Price </span>
                <input className="materialInput" value={ this.state.asset.price } onChange={ (e) => { this.handleChange('price', e.target.value) } }></input>

                <span className="placeholderText"> Brand </span>
                <input className="materialInput" value={ this.state.asset.brand } onChange={ (e) => { this.handleChange('brand', e.target.value) } }></input>

<br />
                <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save }>Save </button>
                <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel }> Cancel </button>
                <br /> 
                <span id="assetID"> ID: { this.state.asset.id } </span>
            </div>
                :
                <p id="noAsset"> No Asset Selected </p>   
        }
        </div>
        )
    }
}
export default AssetEditor;