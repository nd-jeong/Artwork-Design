import React from 'react';
import ImagePreview from './components/imagePreview';
import ArtworkSelector from './components/artworkSelector';
import BGSelector from './components/bgSelector';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            backgrounds: [1, 2, 3, 4],
            currentBG: '',
            artworks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            currentArt: ''
        }
        
        this.artworkChange = this.artworkChange.bind(this);
        this.backgroundChange = this.backgroundChange.bind(this);
    }

    artworkChange(artID) {
        this.setState({
            currentArt: artID
        });
    }

    backgroundChange(bgID) {
        this.setState({
            currentBG: bgID
        });
    }

    render() {
        return(
            <Container className='app'>
                <Row>
                    <p>Test</p>
                </Row>
                <Row className='image-window'>
                    <Col className='preview'>
                        <ImagePreview props={this.state}/>
                    </Col>
                    <Col className='menu'>
                            <ArtworkSelector 
                                props={this.state}
                                artSelect={this.artworkChange}/>
                            <BGSelector 
                                props={this.state}
                                bgSelect={this.backgroundChange}
                            />
                    </Col>
                </Row>
            </Container>
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
