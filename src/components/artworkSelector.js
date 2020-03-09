import React from 'react';
import '../App.css';

class ArtworkSelector extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.artSelect(e.target.id)
    }

    render() {
        const artworkArray = this.props.props.artworks;
        const artworkSelection = artworkArray.map(artID => {
            return(
            <div className='art-image' id={artID} onClick={this.handleClick}></div>
            )
        });

        return(
            <div className='art-selector'>
                <p>Art Selector</p>
                {artworkSelection}
            </div>
        )
    }
}

export default ArtworkSelector;