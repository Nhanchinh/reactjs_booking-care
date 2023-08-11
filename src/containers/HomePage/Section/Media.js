import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./specialtyStyle.scss"
import "./Media.scss"
class Media extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {

       
        return (
          <div className='Media'>

            <div className='Media-wrapper'>

            <div className='Media-wrapper-in'>
                <div style={{fontSize:"24px",paddingBottom:"10px"}} className=''>TRUYỀN THÔNG NÓI GÌ VỀ BOOKINGCARE</div>
            <iframe width="570" height="320"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            </div>


            <div className='Media-wrapper-in'>
             

            </div>

            </div>



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

export default connect(mapStateToProps, mapDispatchToProps)(Media);
