
import React, { Component } from 'react';

class ClassComp1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='props'>

                <h1>
                    CLASSCOMPONENT1
                </h1>
                <ul>
                    { this.props.users.map((user, key) => <li key={ key }>{ user }
                        </li>
                    ) }
                </ul>
            </div>
        );
    }
}

export default ClassComp1;