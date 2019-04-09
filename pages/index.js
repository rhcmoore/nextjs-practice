import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    // static - can be called without component being instantiated yet
    // async - doesn't resolve/return something instantly
    // used to initialize app before it loads (eg. fetch from db and populate with props)
    // static async getInitialProps(context) {
    static getInitialProps(context) {
        // console.log(context);
        // this could be axios instead
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // initializing props
                resolve({appName: "My App"})
            }, 1000);
        });
        
        return promise;
        // return {appName: "My Application"};
    }

    render() {
        return (
            <div>
                {/* using appName from getInitialProps above */}
                <h1>Main Page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push("/auth")}>Button Auth</button>
            </div>
        );
    }
};

export default IndexPage;