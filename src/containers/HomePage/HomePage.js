import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacilities from './Section/MedicalFacilities';
import OutStandingDoctor from './Section/OutStandingDoctor';
class HomePage extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div >
                <HomeHeader />
                <Specialty/>
                <MedicalFacilities/>
                <OutStandingDoctor/>

            </div>
        )
    }

}




const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
