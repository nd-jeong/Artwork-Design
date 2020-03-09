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
        // const bgImageArray = bgImages.map(image => {
        //     return <img src={image} className='bg-image'></img>
        // })
        const bgObject = {};
        bgArray.forEach((bg, i) => bgObject[bg] = bgImages[i]);
        const bgSelection = bgArray.map(bgID => {
            return(
                <div className='bg-image-container' id={bgID} onClick={this.handleClick}>
                    <img src={Object.values(bgObject)[bgID]} className='bg-image'></img>
                </div>
            )
        });

        // const bgSelection = Object.keys(bgObject).map(function(bgID, index) {
        //     return(
        //         <div className='bg-image-container' id={bgID} onClick={() => this.handleClick()}>
        //             <img src={(Object.values(bgObject)[index])} className='bg-image'></img>
        //         </div>
        //     );
        // })

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