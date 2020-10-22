//WithdLoading.js
import React from 'react';

// parameter's send:


// This function takes a component...
// function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...


/*
render() {
    // ... and renders the wrapped component with the fresh data!
    // Notice that we pass through any additional props
    return <WrappedComponent data={this.state.data} {...this.props} />;
}

*/


// passed parameters....

/*
```json

isLoading={this.state.loading}
repos={this.state.repos}

```

 */


function WithLoading(Component) {
    // return <WrappedComponent data={this.state.data} {...this.props} />;

    // console.log('inside WithLoading:  ',isLoading)

    // console.log('inside WithLoading: ...props',{...props}); // CANT' ACCESS ...props here......


    // constructor(props) {
    //     super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     data: selectData(DataSource, props)
        // };
    // }
    return function WihLoadingComponent({ isLoading, ...props }) {


        // if (isLoading)  false == means there is data return <Component/>
        if (!isLoading) return <Component {...props} />;

        return <p>Hold on, fetching data might take some time.</p>;
    };
}
export default WithLoading;