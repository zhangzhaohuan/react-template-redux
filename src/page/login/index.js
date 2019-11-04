import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, fetchLogin } from '../../store/actioncreator/login_actioncreator'




class Login extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    login = () => {
        this.props.loginDispatch();
    }

    fetchLogin = () => {
        this.props.fetchLogin();
    }



    render() {
        console.log('render');
        if(this.props.loginState){
            console.log(this.props.loginState.get('data'));
            console.log(this.props.loginState.get('data').get(0));
        }
        return (
            <div>
                <div onClick={this.login}>
                    login
                </div>
                <div onClick={this.fetchLogin}>fetch</div>
                {this.props.loginState.get('data').map((val,index)=>{
                    return (
                        <li key={val.id}>{val.name}</li>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state/*, ownProps*/) => {
    console.log(state);
    return {
        loginState: state.get('login_reducer')
    }
}

//mapDispatch的时候必须这样用对象的方式

export default connect(mapStateToProps, {
    loginDispatch: login,
    fetchLogin: fetchLogin
})(Login)