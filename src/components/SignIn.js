import React, {Component} from 'react';

class SignIn extends Component{
    render(){
        return(
            <div className="signin-form">
                <form>
                    <h1>Sign In/ Sign Up</h1>
                    <button>Sign In With Google/ Sign Up With Google</button>
                </form>

            </div>
        );
    }
}
export default SignIn;