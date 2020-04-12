import React,{Component} from "react";
import ListDocotorSearch from "./ListDocotorSearch";
import axios from "axios";
class SearchDoctorPages extends Component{
constructor(props) {
    super(props);
    this.state={
        datas:[],
        payload:false
    }
}
    render() {
        const getDoctorData=async ()=>{
            const datas =(await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
            this.setState({
                datas:datas,
            })
        }

        return(
            <div className='container'>
                <div className='container-search-bar' style={{marginTop:"20px"}}>
                    <div className='row'>
                        <input placeholder='' className='col-md-8 m-2'/>
                        <button placeholder='' className='col-md-2' onClick={getDoctorData}>search</button>
                    </div>

                </div>
                <div className='row'>
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                {/*<CardDoctor/>*/}
                <ListDocotorSearch datas={this.state.datas} />
                </div>


            </div>
        );

    }
}
export default SearchDoctorPages;