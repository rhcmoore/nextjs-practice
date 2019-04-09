import React from "react";
import User from "../../components/User";

const authIndexPage = (props) => (
    <div>
        <h1>Auth Index Page - {props.appName}</h1>
        <User name={"Rick"} age={22} />
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // initializing props
            resolve({ appName: "Super App" })
        }, 1000);
    });
    return promise;
}

export default authIndexPage;