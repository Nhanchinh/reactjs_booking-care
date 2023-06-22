import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./usermanage.scss"
import { getAllUser, createNewUser, deleteUser } from '../../services/userService';
import ModalUser from "./ModalUser"
import { reject } from 'lodash';
import _emitter from "../../utils/emitter"
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isToggleShow: false,

        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()

    }
    handleAddNewUser = () => {
        this.setState({
            isToggleShow: !this.state.isToggleShow
        })


    }

    getAllUserFromReact = async () => {
        let response = await getAllUser('All')
        if (response && response.errCode === 0) {
            this.setState({
                listUser: response.users
            })
        }
    }


    toggle = () => {
        this.setState({
            isToggleShow: !this.state.isToggleShow
        })


    }
    clearState = () => {
        this.setState({

        })
    }


    handleSendDataCreatUser = (data) => {

        return new Promise(async (resolve, reject) => {

            try {
                let response = await createNewUser(data)
                if (response.errCode === 1) {

                    alert(response.message)


                } else {
                    this.getAllUserFromReact()
                    this.toggle()
                    _emitter.emit('EVENT_CLEAR_DATA')

                }



            } catch (e) {
                reject(e)
            }

        })



    }

    handleDelete = async (data) => {
        console.log(data.id)
        await deleteUser(data.id)
        this.getAllUserFromReact()
    }


    render() {
        let { listUser } = this.state

        return (
            <div className='user-container'>
                <ModalUser
                    isToggleShow={this.state.isToggleShow}
                    toggle={this.toggle}
                    sendData={this.handleSendDataCreatUser}
                ></ModalUser>

                <div className=" title text-center">User management</div>
                <div className='user-table mx-4' >
                    <div className='Add-new-user my-5'>
                        <button

                            onClick={() => { this.handleAddNewUser() }}
                        >
                            <i

                                className="fas fa-plus"></i> Add New User
                        </button>

                    </div>


                    <table>
                        <tbody>
                            <tr style={{ background: "#bb92c1", color: "white" }}>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>

                            {listUser && listUser.map((item, index) => {
                                return (
                                    <>

                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <i style={{ padding: "4px", color: 'orange', cursor: 'pointer' }} className=" fas fa-edit"></i>
                                                <i
                                                    onClick={() => { this.handleDelete(item) }}
                                                    style={{ padding: "4px", color: 'red', cursor: 'pointer' }} className="fas fa-trash-alt"></i>
                                            </td>

                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>


            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
