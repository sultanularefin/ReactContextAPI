
import React from 'react';
import List from './List';
import WithLoading from './WithdLoading';

// WrapperComponent is List

// HOC is WithLoading

// ListWithLoading is a var..


const ListWithLoading = WithLoading(List);


class HOC3TZ extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {

            loading:true,
            repos:[],
        };
        // this.handleClick = this.handleClick.bind(this);
    }


    get2(){

        fetch ('https://tripzchat.com/mongo/api/chat_get_all.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                user_id: "b52182f3-0ad4-11eb-9755-024701e0ef8a",
                partner_id: "fc437542-65b4-11ea-a10e-02240e04f0e2"
            }),
        })
            .then (response => response.json ())
            .then (responseJson => {
                this.setState (
                    {
                        refreshing: false,
                        dataSource: responseJson,
                        user_name: responseJson.name,
                    },
                    function () {
                        this.arrayholder = responseJson;
                    }
                );
            })
            .catch (error => {
                console.error (error);
            });
    }


    getAllChatTZ(){
        fetch ('https://tripzchat.com/mongo/api/chat_get_all.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({

                // {

                "user_id": "b52182f3-0ad4-11eb-9755-024701e0ef8a",
                "partner_id": "fc437542-65b4-11ea-a10e-02240e04f0e2"
                // }

                // user_id: 'b52182f3-0ad4-11eb-9755-024701e0ef8a',
                // partner_id: 'fc437542-65b4-11ea-a10e-02240e04f0e2',

                // user_id: this.state.user_id,
                // partner_id: this.props.navigation.state.params.NameOBJ,
            }),
        })
            .then (response => response.json ())
            .then (responseJson => {

                console.log('responseJson',responseJson);
                // this.setState (
                //     {
                //         refreshing: false,
                //         dataSource: responseJson,
                //         user_name: responseJson.name,
                //     },
                //     function () {
                //         this.arrayholder = responseJson;
                //     }
                // );
            })
            .catch (error => {
                console.error (error);
            });
    }


    tick() {
        fetch(`https://api.github.com/users/hacktivist123/repos`)
            .then((json) => json.json())
            .then((repos) => {
                this.setState({
                    loading: false,
                    repos: repos
                });
            });
    }

    componentDidMount() {


        // not need below line here
        // this.setState({ loading: true });
        this.timerID = setInterval(
            // () => this.tick(),
            ()=>this.get2(),
            1000
        );


    }

    componentWillUnmount() {

        clearInterval(this.timerID);
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


export default HOC3TZ;

// https://api.github.com/users/hacktivist123/repos

/*
```json
    

  
```
*/