
import React, { Component } from 'react';

class ClassComp2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>
                    CLASSCOMPONENT2
                </h1>
                <ul>
                    {this.props.users.map((user, key) => <li key={ key }>{ user }
                        </li>
                    ) }
                </ul>
            </div>
        );
    }
}

export default ClassComp2;