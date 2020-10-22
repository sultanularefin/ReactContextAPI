
import React from 'react';
import List from './List';
import WithLoading from './WithdLoading';


const ListWithLoading = WithLoading(List);


class HOC2 extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {  };
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.setState({ loading: true });
        fetch(`https://api.github.com/users/hacktivist123/repos`)
            .then((json) => json.json())
            .then((repos) => {
                this.setState({ loading: false, repos: repos });
            });
    }
    render() {
        return (
            <ListWithLoading
                isLoading={this.state.loading}
                repos={this.state.repos}
            />
        );
    }
}
// export default App;


export default HOC2;
