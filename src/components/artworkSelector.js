import React from 'react';
import '../App.css';

class ArtworkSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const artworkArray = this.props.props.artworks;
        console.log(artworkArray)
        const artworkDisplay = artworkArray.map(artID => {
            return(
            <div className='art-image' id={artID}></div>
            )
        })
        return(
            <div className='art-selector'>
                <p>Art Selector</p>
                {artworkDisplay}
                {/* <div className='art-image' id='art-1'></div>
                <div className='art-image' id='art-2'></div>
                <div className='art-image' id='art-3'></div>
                <div className='art-image' id='art-4'></div>
                <div className='art-image' id='art-5'></div>
                <div className='art-image' id='art-6'></div>
                <div className='art-image' id='art-7'></div>
                <div className='art-image' id='art-8'></div>
                <div className='art-image' id='art-9'></div>
                <div className='art-image' id='art-10'></div> */}
            </div>
        )
    }
}

export default ArtworkSelector;