import React, { Component } from 'react';
import './App.css'
import Asset from './components/Asset'
import AssetEditor from './components/AssetEditor'
import AssetList from './components/AssetList'
import Header from './components/Header'

class App extends Component {

  constructor() {
    super();
    this.state = {
      assets: [ new Asset(0, 'drill', 200, 'deWalt'), new Asset(1, 'air compressor', 350, 'Bosch'), new Asset(2, 'sander', 30, 'Black & Decker')  ],
      selectedAsset: null
    };
    
        this.selectAsset = this.selectAsset.bind( this );
        this.refresh = this.refresh.bind( this );
  }

  selectAsset(asset) {
    this.setState({ selectedAsset: asset });
  
  }

  refresh() {
    this.setState(this.state);
  }

  handleChange (e)  {
    this.setState({
      assets: e.target.value
    })
  }

  submitAsset () {
      this.setState({ });
  }


  render() {
    return (
      <div id="app">
          <Header />
          <div className='left-container'>
          <div>Name<input onChange={this.handleChange}/></div>
          <div>Price<input onChange={this.handleChange}/></div>
          <div>Brand<input onChange={this.handleChange}/></div>
          <button onClick={this.submitAsset}>Add an Asset</button>
          </div>
          <div className="main-container">
            <AssetList assets={this.state.assets} selectAsset={ this.selectAsset } />
            <AssetEditor selected={this.state.selectedAsset} refreshList={ this.refresh } />
          </div>
      </div>
    );
  }
}


export default App;
