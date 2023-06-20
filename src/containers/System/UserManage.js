import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./usermanage.scss"
import { getAllUser } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: []
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


    render() {
        let { listUser } = this.state

        return (
            <div className='user-container'>
                <div className=" title text-center">User management</div>
                <div className='user-table'>
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {console.log(listUser)}
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
