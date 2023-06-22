
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _emitter from "../../utils/emitter"
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: ''
        };
        this.ClearData()
    }

    ClearData = () => {
        _emitter.on('EVENT_CLEAR_DATA', () => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: ''
            })
        })
    }



    componentDidMount() {
    }

    checkValidate = () => {
        let check = true;
        let arr = ['firstName', 'lastName', 'email', 'address', 'password']
        for (let i = 0; i < arr.length; i++) {
            if (!this.state[arr[i]]) {
                check = false;
                alert('missing:' + arr[i])
                break;
            }
        }

        return check


    }



    handleInputModal = async (event, id) => {


        let copyState = { ...this.state }
        copyState[id] = event.target.value

        this.setState({
            ...copyState
        },)


    }

    handleAddANewUserToDb = () => {
        let check = this.checkValidate();
        if (check) {
            this.props.sendData(this.state)


        }
    }




    render() {
        return (

            <Modal
                centered
                size='lg'
                isOpen={this.props.isToggleShow} toggle={() => { this.props.toggle() }}>

                <ModalHeader toggle={this.toggle}><span className='modal-create-user-header'>
                    <b>Creat New User</b>
                    <span
                        onClick={() => { this.props.toggle() }}

                    >x</span>

                </span></ModalHeader>
                <ModalBody>
                    <div className='container'   >

                        <div className='input-content'>
                            <div className='header-input'>First Name</div>
                            <input
                                value={this.state.firstName}
                                onChange={(event) => { this.handleInputModal(event, "firstName") }}
                                className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Last Name</div>
                            <input
                                value={this.state.lastName}
                                onChange={(event) => { this.handleInputModal(event, "lastName") }}
                                className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Password</div>
                            <input
                                onChange={(event) => { this.handleInputModal(event, "password") }}
                                value={this.state.password}
                                className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Email</div>
                            <input
                                value={this.state.email}
                                onChange={(event) => { this.handleInputModal(event, "email") }}
                                className='input-type' />
                        </div>
                        <div className='input-content langer'>
                            <div className='header-input'>Address</div>
                            <input
                                value={this.state.address}
                                onChange={(event) => { this.handleInputModal(event, "address") }}
                                className='input-type' />
                        </div>


                    </div>





                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-2' onClick={() => { this.handleAddANewUserToDb() }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" className='px-2' onClick={() => { this.props.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);












