import React from 'react';
import '../App.css';
import bgImages from './bgImages';

class ImagePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='img-preview'>
                <p>Image Preview</p>
                <img src={this.props.props.bgFilePath}></img>
            </div>
        )
    }
}

export default ImagePreview