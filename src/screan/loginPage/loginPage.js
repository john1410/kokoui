import React from "react";
import './loginStyle.css';
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
                showCreateAccount:false

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
        let showModal=null;
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
                    <i className="fas fa-user-md"></i>
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
                    <i className="fas fa-hospital-user"></i>
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
            setTimeout(()=>{
                showModal = modaldoctor;
                console.log('hi')
            },10);
        }
        else if(this.state.showPatientModal){
            showModal = modalPatient;
        }
        else if(this.state.showCreateAccount){
            showModal = modalCreateAccount;
        }

        return (
            <div className='container-login container'>
                <h1>Hello, world!</h1>
                <div className="row btn-click-signin">
                <button onClick={doctorShow} className='btn btn-primary btn-lg'>دکتر <i className="fas fa-user-nurse"></i></button>
                <button onClick={patientShow} className='btn btn-warning btn-lg'>بیمار <i className="fas fa-user-injured"></i></button>
                <button onClick={createAccount} className='btn btn-info btn-lg'>ساخت حساب <i className="fas fa-user-alt"></i></button>
                </div>
                <div className='row'>
                    {showModal}

                </div>

            </div>
        );
    }
}

export default LoginPage;