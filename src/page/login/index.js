import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, fetchLogin, sortList } from '../../store/actioncreator/login_actioncreator'


import { Map, List, is, fromJS } from 'immutable';


class Login extends Component {
    componentDidMount() {



        const one = Map(
            {
                a: 10,
                b: List([1, 2, 3])
            });
        const two = Map({ b: 40, a: 50, d: 60 })
        const tree = one.merge({ b: List([1, 2, 3]) });
        console.log(one);
        console.log(tree);
        console.log(is(one, tree));
    }

    login = () => {
        this.props.loginDispatch();
    }

    fetchLogin = () => {
        this.props.fetchLogin();
    }

    sort = () => {
        this.props.sortList();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const props = this.props;


        const nextloginState = this.props.loginState;
        const { loginState } = nextProps;
        console.log('shouldComponentUpdate')
        console.log(nextloginState);
        console.log(loginState);
        console.log(is(loginState, nextloginState));
        console.log(nextloginState === loginState)
        return true;
    }



    render() {
        console.log('render');
        if (this.props.loginState) {
            console.log(this.props.loginState.get('data'));
            console.log(this.props.loginState.get('data').get(0));
        }
        return (
            <div>
                <button onClick={this.fetchLogin}>fetch</button>
                <br />
                <br />

                <button onClick={this.sort}>
                    排序
                </button>


                {this.props.loginState.get('data').map((val, index) => {
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
    fetchLogin: fetchLogin,
    sortList: sortList
})(Login)