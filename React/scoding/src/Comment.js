import { render } from '@testing-library/react';
import React from 'react';

class Comment extends React.Component{
    render() {
        return (
            <div>
                <h1>{'My first component!'}</h1>
            </div>
        )
    }
}

export default Comment;