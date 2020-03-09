import React from 'react';
import '../App.css';

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
        const bgSelection = bgArray.map(bgID => {
            return(
                <div className='bg-image' id={bgID} onClick={this.handleClick}></div>
            )
        });

        return(
            <div className='bg-selector'>
                <p>Background Selector</p>
                {bgSelection}
            </div>
        )
    }
}

export default BGSelector;