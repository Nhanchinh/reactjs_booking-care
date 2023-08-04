import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacilities from './Section/MedicalFacilities';
import OutStandingDoctor from './Section/OutStandingDoctor';
import Footer from './Section/Footer';
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
                <Footer/>

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
