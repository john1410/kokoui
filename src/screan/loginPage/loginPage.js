import React from "react";
import './loginStyle.css';
import DoctorLogin from '../../img/doctorLogin.png'
import PatientLogin from '../../img/patientLogin.png'
import {
    Link, Redirect
} from "react-router-dom";


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showDoctorModal:false,
            showPatientModal:false,
            showCreateAccount:false,
        }
    }

    render() {
        const doctorShow=()=>{
            this.setState({
                showDoctorModal:!this.state.showDoctorModal,
                showPatientModal:false,
                showCreateAccount:false,
            });
        }
        const patientShow=()=>{
            this.setState({
                showPatientModal:!this.state.showPatientModal,
                showDoctorModal:false,
                showCreateAccount:false


            });
        }
        const createAccount=()=>{
            this.setState({
                showCreateAccount:!this.state.showCreateAccount,
                showDoctorModal:false,
                showPatientModal:false,

            });
        }

        const createAccountBtn=()=>{
            console.log('hi')
            return(
                <Redirect to={'/searchDoctor'} />
            )
        }
        let showModal=<div className='modalHide'></div>;
        //doctor modal
        const modaldoctor=
            <div className={this.state.showDoctorModal?'modalShow signin col-md-4':'modalHide signin col-md-4'}>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  placeholder="Email"/>
                </div>
                <div className="form-group input-field">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"  placeholder="Password"/>
            </div>
                <div className="form-group input-field">
                    <div className='container check-login-field'>
                        <i className="fas fa-user-md"></i>
                        <div className='row'>
                            <button className='col-md-6 btn-primary'>ساخت حساب</button>
                            <button className='col-md-6 btn-warning'>ورود</button>
                        </div>
                    </div>
                </div>

            </div>;
        //patient modal
        const modalPatient=
            <div className={this.state.showPatientModal?'modalShow signin col-md-4':'modalHide signin col-md-4'} >
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  placeholder="Email"/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  placeholder="Password"/>
                </div>
                <div className="form-group input-field">
                    <div className='container check-login-field'>
                        <i className="fas fa-hospital-user"></i>
                        <div className='row'>
                            <button className='col-md-6 btn-primary'>ساخت حساب</button>
                            <button className='col-md-6 btn-warning'>ورود</button>
                        </div>
                    </div>
                </div>


            </div>;

   const modalCreateAccount=
            <div className={this.state.showCreateAccount?'modalShow signup col-md-4':'modalHide signup col-md-4'} >
                <div className="form-group input-field">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  placeholder="Email"/>
                </div>
                <div className="form-group input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  placeholder="Password"/>
                </div>
                <div className="form-group input-field">
                    <i className="fas fa-file-invoice"></i>
                   <Link to='/searchDoctor'> <button onClick={createAccountBtn}>ساختن
                    </button>
                   </Link>

                </div>

            </div>;

        if(this.state.showDoctorModal){
            showModal = modaldoctor;
           }
        else if(this.state.showPatientModal){
            showModal = modalPatient;
        }
        else if(this.state.showCreateAccount){
            showModal = modalCreateAccount;
        }
        else {
                showModal=null;
                console.log('hi')
        }

        return (
            <div className='container-login container'>
                    <div className='row'>
                        <div className='col-md-6 login-field'>
                            <div className='container container-loginField'>
                                <img src={DoctorLogin} alt='doctorLogin'/>
                                <button onClick={doctorShow} className='btn btn-primary btn-lg doctodt-btn'>دکتر <i className="fas fa-user-nurse"></i></button>
                            </div>

                        </div>

                        <div className='col-md-6 login-field'>
                            <div className='container container-loginField'>
                            <img src={PatientLogin} alt='patientLogin'/>
                            <button onClick={patientShow} className='btn btn-warning btn-lg'>بیمار <i className="fas fa-user-injured"></i></button>
                            </div>
                        </div>

                    </div>
                <div className='row'>
                    {showModal}
                </div>

            </div>
        );
    }
}

export default LoginPage;