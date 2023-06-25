import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./headerStyle.scss";
class HomeHeader extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (

            <div >

                {console.log(this.props)}
                {/* header of page */}

                <div className='header-container'>


                    <div className='logo-header'>


                        <div className='logo-option'><i class="fas fa-bars"></i></div>
                        <div className=' logo-icon'></div>

                    </div>


                    <div className='header-content'>
                        <div className='content-banner'>
                            <div className='banner-title'> <FormattedMessage id='homeheader.speciality' /></div>
                            <div className='sub-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                        </div>
                        <div className='content-banner'>
                            <div className='banner-title'><FormattedMessage id='homeheader.health-facilities' /></div>
                            <div className='sub-title'> <FormattedMessage id='homeheader.choose-hospital-and-clinic' /></div>
                        </div>
                        <div className='content-banner'>
                            <div className='banner-title'> <FormattedMessage id='homeheader.doctor' /></div>
                            <div className='sub-title'> <FormattedMessage id='homeheader.choose-doctor' /></div>
                        </div>
                        <div className='content-banner'>
                            <div className='banner-title'> <FormattedMessage id='homeheader.examination-package' /></div>
                            <div className='sub-title'> <FormattedMessage id='homeheader.choose-examination-package' /></div>
                        </div>


                    </div>


                    <div style={{ display: "flex" }} className='header-support'>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '0 5px 0 0' }} className='support-line'>

                            <i className="support-color fas fa-question-circle"></i><br />
                            <div><FormattedMessage id="homeheader.support" /><span className='support-color'>09898989</span></div>

                        </div>

                        <div className='change-language'><span>VI</span><>     </><span>EN</span></div>
                    </div>


                </div>

                {/* banner of this page */}

                <div className='banner-container'>

                    <div className=' banner-container-search'>

                        <div className='banner-title'>
                            <div className='banner-tilte-sub'><FormattedMessage id="banner.title-banner" /></div>
                            <div className='banner-title-main'><FormattedMessage id="banner.title-banner-main" /></div>
                        </div>
                        <div className='banner-search'>
                            <div className='wrapper-of-search'>
                                <div className='search' ><i class="fas fa-search"></i></div>
                                <input className='search-bar' />

                            </div>
                        </div>



                    </div>





                    <div className='banner-asset'>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-hospital"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title0" /></div>
                        </div>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-mobile-alt"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title1" /></div>
                        </div>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-file-medical"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title2" /></div>
                        </div>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-vial"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title3" /></div>
                        </div>


                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-stethoscope"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title4" /></div>
                        </div>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-briefcase-medical"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title5" /></div>
                        </div>
                        <div className='wrapper-icon-asset'>
                            <div className='wrapper-icon'><i class="fas fa-notes-medical"></i></div>
                            <div className='tilte-of-icon-asset'><FormattedMessage id="banner.title6" /></div>
                        </div>


                    </div>

                </div>




            </div>
        )
    }

}




const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
