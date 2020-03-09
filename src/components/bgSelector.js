import React from 'react';
import '../App.css';
import bgImages from './bgImages';

class BGSelector extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.bgSelect(e.target.id);
    }

    render() {
        const bgArray = this.props.props.backgrounds;
        const bgImageArray = bgImages.map(image => {
            return <img src={image}></img>
        })
        const bgSelection = bgArray.map(bgID => {
            return(
            <div className='bg-image' id={bgID} onClick={this.handleClick}>{bgImageArray}</div>
            )
        });

        return(
            <div>
                <p>Background Selector</p>
                <div className='bg-selector'>
                    {bgSelection}
                </div>
            </div>
        )
    }
}

export default BGSelector;