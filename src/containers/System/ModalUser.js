
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
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
                            <input className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Last Name</div>
                            <input className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Password</div>
                            <input className='input-type' />
                        </div>
                        <div className='input-content'>
                            <div className='header-input'>Email</div>
                            <input className='input-type' />
                        </div>
                        <div className='input-content langer'>
                            <div className='header-input'>Address</div>
                            <input className='input-type' />
                        </div>


                    </div>





                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-2' onClick={() => { this.props.toggle() }}>
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












