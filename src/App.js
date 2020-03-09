import React from 'react';
import ImagePreview from './components/imagePreview';
import ArtworkSelector from './components/artworkSelector';
import BGSelector from './components/bgSelector';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import './App.css';
import bgImages from './components/bgImages';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            backgrounds: [0, 1, 2, 3, 4],
            currentBG: '',
            artworks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            currentArt: '',
            bgFilePath: ''
        }
        
        this.artworkChange = this.artworkChange.bind(this);
        this.backgroundChange = this.backgroundChange.bind(this);
        this.backgroundSelect = this.backgroundSelect.bind(this);
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

    backgroundSelect() {
        const bgArray = this.state.backgrounds;
        const bgObject = {};
        bgArray.forEach((bg, i) => bgObject[bg] = bgImages[i]);

        Object.keys(bgObject).map(bgID => {
            if (this.state.currentBG === bgID) {
                this.state.bgFilePath = Object.values(bgObject)[bgID]
            }
        })
    }

    componentDidMount() {
        
    }

    render() {
        this.backgroundSelect();
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
    Photo by Jason Boyd from Pexels
    
*/

export default App;
