import React from 'react';
import '../App.css';

class ImagePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='img-preview'>
                <p>Image Preview</p>
            </div>
        )
    }
}

export default ImagePreview