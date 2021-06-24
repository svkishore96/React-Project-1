import React ,{Component} from 'react';
import axios from 'axios';
class Jsondata extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:[],
            msg:''
        }
        this.getJson();
    }

    getJson = () => {
        const url = "https://cybotrix.com/ios/car.json";
        axios.get(url)
        .then(res=>{
         this.setState({ product: res.data})
        })
        .catch(err=> {
            this.setState({ product:err})
            });
        }
    render()
    {
        return <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">JSON is working fine</h1>
                </div>
                {
                 
                    this.state.product.map(row=>{
                        return <div className="col-md-2 form-group">
                                <div className="border b-2">
                                   <img className="img-fluid height200" src={`https://cybotrix.com/ios/img/${row.image}`}/>
                                    <p className="text-center">{row.model}</p>
                                    <p className="text-center text-danger">Rs. {row.price}</p>
                                </div>
                             </div>
                    })
                  
                }
              </div>
    }
}

export default Jsondata;