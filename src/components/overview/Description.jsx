import React from 'react';
import sampleApts from './sampleData';
import Restaurants from './Restaurants.jsx';
import Schools from './Schools.jsx';
import FileUploadOverlay from '../FileUpload/FileUploadOverlay.jsx';
import './detail.style.scss';
import CrimeMap from './CrimeMap.jsx';
import Neighborhood from './Neighborhood.jsx';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
let token = false;
if (Cookies.get('jwt')) {
    token = jwtDecode(Cookies.get('jwt'));
}

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areaModal: false,
            diningModal: false,
            schoolsModal: false
        }
    }

    areaModal () {
        if (this.state.areaModal === true){
            return (
                <div id="areaModal" className="modal">
                    <div className="modal-content3">
                        <span className="close" onClick={() => {this.flipAreaModal()}}>&times;</span>
                        <Neighborhood location={this.props.details}/>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    flipAreaModal () {
        if (this.state.areaModal === true) {
            this.setState({
                areaModal: false,
                diningModal: this.state.diningModal,
                schoolsModal: this.state.schoolsModal,
                crimeModal: this.state.crimeModal
            })
        } else {
            this.setState({
                areaModal: true,
                diningModal: this.state.diningModal,
                schoolsModal: this.state.schoolsModal,
                crimeModal: this.state.crimeModal
            })
        }
    }

    diningModal () {
        if (this.state.diningModal === true){
            return (
                <div id="diningModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => {this.flipDiningModal()}}>&times;</span>
                        <Restaurants location={this.props.details}/>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    flipDiningModal () {
        if (this.state.diningModal === true) {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: false,
                schoolsModal: this.state.schoolsModal,
                crimeModal: this.state.crimeModal
            })
        } else {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: true,
                schoolsModal: this.state.schoolsModal,
                crimeModal: this.state.crimeModal
            })
        }
    }

    schoolsModal () {
        if (this.state.schoolsModal === true){
            return (
                <div id="schoolsModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => {this.flipSchoolsModal()}}>&times;</span>
                        <Schools location={this.props.details}/>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    flipSchoolsModal () {
        if (this.state.schoolsModal === true) {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: this.state.diningModal,
                schoolsModal: false,
                crimeModal: this.state.crimeModal
            })
        } else {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: this.state.diningModal,
                schoolsModal:true,
                crimeModal: this.state.crimeModal
            })
        }
    }

    crimeModal () {
        if (this.state.crimeModal === true){
            return (
                <div id="crimeModal" className="modal">
                    <div className="modal-content2">
                        <span className="close" onClick={() => {this.flipCrimeModal()}}>&times;</span>
                        <CrimeMap location={this.props.details}/>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    flipCrimeModal () {
        if (this.state.crimeModal === true) {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: this.state.diningModal,
                schoolsModal: this.state.schoolsModal,
                crimeModal: false
            })
        } else {
            this.setState({
                areaModal: this.state.areaModal,
                diningModal: this.state.diningModal,
                schoolsModal:this.state.schoolsModal,
                crimeModal: true
            })
        }
    }

    render () {
        return (
            <>
                <div className='desMain'>
                    <div className='desDetail'>
                        <div className='desHeader'>
                        <div className='desAddress'>
                            {this.props.details.address}, {this.props.details.city}, {this.props.details.state}, {this.props.details.zipCode}
                            </div>
                            {token ?
                    <div className='desAct'>
                        <div className='contactAgent'>Contact Agent</div>
                        <FileUploadOverlay username={"username"} apartment_id={this.props.details._id} />
                    </div>
                    : null}
                        <div className='desAptDet'>
                            <div className='desEle1'>${this.props.details.price}/Month</div>
                            <div className='desEle2'>Bedrooms:{this.props.details.beds}</div>
                            <div className='desEle3'>Bathrooms:{this.props.details.baths}</div>
                        </div>
                        </div>
                        <div className='desTail'>
                        <div className='desDes'>{this.props.details.description}</div>
                <div className='desContainer'>
                    <img src='./neighborhood.png' style={{top:20, left:20}} className='criteria' onClick={() => {this.flipAreaModal()}}></img>
                    <img src='./schools.png' style={{top:20, left:160}} className='criteria' onClick={() => {this.flipSchoolsModal()}}></img>
                    <img src='./restaurants.png' style={{top:160, left:20}} className='criteria' onClick={() => {this.flipDiningModal()}}></img>
                    <img src='./crime.png' style={{top:160, left:160}} className='criteria' onClick={() => {this.flipCrimeModal()}}></img>
                </div>
                </div>
                    </div>
                </div>
                {this.areaModal()}
                {this.diningModal()}
                {this.schoolsModal()}
                {this.crimeModal()}
            </>
        )
    }
}

export default Description