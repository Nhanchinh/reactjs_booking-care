import React from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLoginApi } from '../../services/userService';
import * as actions from "../../store/actions"
import { FormattedMessage } from 'react-intl';
import "../Auth/Login.scss"
import { reject } from 'lodash';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: "",
            errMessage: ""
        }
    }

    handlePassChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleUserChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log(this.state)
        try {

            // im not config axios like viedeo so u need to check console.log to know how response send

            let data = await handleLoginApi(this.state.email, this.state.password)
            console.log("data>>>", data)

            if (data && data.errcode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errcode === 0) {
                this.props.userLoginSuccess(data.userData.user)
                console.log('login success')
                console.log("user>>>:", data.userData.user)
            }


        } catch (error) {
            if (error.response) {
                this.setState({
                    errMessage: error.response.data.message
                })
                console.log(error.response)
            }




        }




    }


    render() {
        return (
            <div>
                <div className='background-container'>
                    <div className='form-login-container'>
                        <div className='form-content'>
                            {/* header of form */}
                            <div className='content-header text-center'><h1>Login</h1></div>

                            {/* input Gmail */}
                            <div className='content-input '>
                                <div className='span-title'>Gmail</div>
                                <input
                                    onChange={(e) => { this.handleUserChange(e) }}
                                    value={this.state.email} type='text' className='input-content' />
                            </div>

                            {/* input pass */}
                            <div className='content-input mt-4'>
                                <div className='span-title'>Password</div>
                                <input
                                    onChange={(e) => { this.handlePassChange(e) }}
                                    value={this.state.password} type='text' className='input-content' />
                            </div>
                            <div className='errMess' style={{ color: 'red' }} >{this.state.errMessage}</div>
                            <div className='content-submit text-center mt-5'>
                                <button onClick={() => { this.handleLogin() }} className='btn-login'>
                                    Ok
                                </button>
                            </div>
                            <div className='mt-4  text-center'>Or login with</div>
                            <div className='social-login mt-5'>
                                <i className="fab fa-facebook-f facebook"></i>
                                <i className="fab fa-google google"></i>
                            </div>
                            <div style={{ cursor: 'pointer' }} className='mt-4  text-center'>No account ? sign up now</div>
                        </div>
                    </div>

                </div>




            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        // userLoginSuccess: (userInfor) => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);