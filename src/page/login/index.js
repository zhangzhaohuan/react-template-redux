import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, fetchLogin } from '../../store/actioncreator/login_actioncreator'




class Login extends Component {

    constructor(){
        super();
        this.state={}
    }
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
        console.log('render')
        return (
            <div>
                <div onClick={this.login}>
                    login
                </div>
                <div onClick={this.fetchLogin}>fetch</div>
                {this.props.loginState.data.map((val,index)=>{
                    return (
                        <li key={val.id}>{val.name}</li>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        loginState: state.login_reducer
    }
}

//mapDispatch的时候必须这样用对象的方式

export default connect(mapStateToProps, {
    loginDispatch: login,
    fetchLogin: fetchLogin
})(Login)