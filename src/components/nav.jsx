import React, { PureComponent } from 'react';

class Nav extends PureComponent {
    
    render() {
        return (
            <nav>
                NavTest {this.props.total}
            </nav>
        );
    }
}

export default Nav;