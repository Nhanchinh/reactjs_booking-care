import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./specialtyStyle.scss"
class MedicalFacilities extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return (
          <div className='specialty-wrapper caro'>

            <div className=' sub-specialty-wrapper'>
          <div className='specialty-header'>
            <span className='specailty-header-f1 fb'>Cơ sở y tế nổi bật</span>
            <span className='specailty-header-f2 bt'>Xem thêm</span>
          </div>
         
            <div className='specialty-container' >
              
              <Slider {...settings}>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 1</div>
                </div>

                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 2</div>
                </div>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 3</div>
                </div>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 4</div>
                </div>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 5</div>
                </div>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 6</div>
                </div>
                <div className='content-container'>
                   <div className='specialty-content'>

                  </div >
                  <div>Cơ xương khớp 7</div>
                </div>










             
     
    </Slider>

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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacilities);
