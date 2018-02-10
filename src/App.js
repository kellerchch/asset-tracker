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
      assetToAdd: new Asset(null, '', 0, ''),
      selectedAsset: {
        id: null,
        name: '',
        price: 0,
        brand: ''
      }
    };
    
        this.selectAsset = this.selectAsset.bind( this );
        this.refresh = this.refresh.bind( this );
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitAsset = this.submitAsset.bind(this);
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
      let copy = this.state.assets.slice()
      copy.push(this.state.assetToAdd)
      this.setState({ assets: copy });
  }

  handleSubmit(e) {
    let copy = this.state.assetToAdd;
    copy[e.target.name] = e.target.value;
    copy.id = this.state.assets.length;
    this.setState({ assetToAdd: copy });
  }

  render() {
    return (
      <div id="app">
          <Header />
          <div className='left-container'>
                  <form onSubmit={this.handleSubmit}>
                  <label>
                    Asset Name:
                    <input
                      name="name"
                      type="text"
                      value={this.state.assets.name}
                      onChange={this.handleSubmit} />
                  </label>
                    <br />
                  <label>
                    Price:
                    <input
                      name="price"
                      type="number"
                      value={this.state.assets.price}
                      onChange={this.handleSubmit} />
                  </label>
                  <label>
                    Brand:
                    <input
                      name="brand"
                      type="text"
                      value={this.state.assets.brand}
                      onChange={this.handleSubmit} />
                  </label>
                  {/* <input type="submit" value="Submit" /> */}
                  </form>
                  <button onClick={this.submitAsset}>Add Asset</button>
  
          </div>
          <div className="main-container">
            <AssetList assets={this.state.assets} selectAsset={ this.selectAsset } />
            <AssetEditor 
            selected={this.state.selectedAsset} 
            refreshList={ this.refresh } />
          </div>
      </div>
    );
  }
}


export default App;
