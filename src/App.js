import React from 'react';
import ImagePreview from './components/imagePreview';
import ArtworkSelector from './components/artworkSelector';
import BGSelector from './components/bgSelector';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            backgrounds: [1, 2, 3, 4, 5],
            currentBG: '',
            artworks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            currentArt: ''
        }
        
        this.artworkChange = this.artworkChange.bind(this);
    }

    artworkChange(artID) {
        this.setState({
            currentArt: artID
        });
    }

    render() {
        return(
            <div>
                <header>
                    <p>Test</p>
                </header>
                <ImagePreview props={this.state}/>
                <ArtworkSelector 
                    props={this.state}
                    artSelect={this.artworkChange}/>
                <BGSelector props={this.state}/>
            </div>
        )
    }
}

/* 
    Photo by NeONBRAND on Unsplash 
    Photo by Sidekix Media on Unsplash
    Photo by Naomi Hébert on Unsplash
    Photo by Vinicius Amano on Unsplash
*/

export default App;
