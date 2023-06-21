import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./usermanage.scss"
import { getAllUser } from '../../services/userService';
import ModalUser from "./ModalUser"
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isToggleShow: false
        }
    }

    async componentDidMount() {
        let response = await getAllUser('All')
        if (response && response.errCode === 0) {
            this.setState({
                listUser: response.users
            })
        }

    }
    handleAddNewUser = () => {
        this.setState({
            isToggleShow: !this.state.isToggleShow
        })


    }

    toggle = () => {
        this.setState({
            isToggleShow: !this.state.isToggleShow
        })


    }





    render() {
        let { listUser } = this.state

        return (
            <div className='user-container'>
                <ModalUser
                    isToggleShow={this.state.isToggleShow}
                    toggle={this.toggle}
                ></ModalUser>

                <div className=" title text-center">User management</div>
                <div className='user-table mx-4' >
                    <div className='Add-new-user my-5'>
                        <button

                            onClick={() => { this.handleAddNewUser() }}
                        >
                            <i

                                class="fas fa-plus"></i> Add New User
                        </button>

                    </div>


                    <table>
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

                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <i style={{ padding: "4px", color: 'orange', cursor: 'pointer' }} class=" fas fa-edit"></i>
                                            <i style={{ padding: "4px", color: 'red', cursor: 'pointer' }} class="fas fa-trash-alt"></i>
                                        </td>

                                    </tr>
                                </>
                            )
                        })}
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
