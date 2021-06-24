import React ,{Component } from 'react';
import axios from 'axios';

class Newproduct extends Component{
    constructor(props) {
        super(props);
      }

      state ={
        qty : 0,
        price:0,
        name : "",
        details:"",
        mymsg:"",
      };
      handleName = async e => {
         await this.setState({
           name : e.target.value
         })
      }
    
      handlePrice = async m => {
        await this.setState({
          price : m.target.value
        })
     }
    
     handleQty = async n => {
      await this.setState({
        qty : n.target.value
      })
    }
      handleDetails = async d => {
        await this.setState({
          details : d.target.value
        })
    }
    
      handleSubmit = e => {
      e.preventDefault();
      //console.log(this.state.text);
      let formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("price", this.state.price);
      formData.append("qty", this.state.qty);
      formData.append("details", this.state.details);
      const url = "http://localhost/reactjsphp/saveproduct.php";
      axios.post(url , formData)
      .then(res=>{
                 //window.location.href="/productlist";
                  this.setState({ mymsg: res.data});
                  console.log(res.data)
                })
      .catch(err=> console.log(err));
      }
    
    render(){
        return <div className="row">
                <div className="col-md-3"></div>
                 <div className="col-md-6">
                        <h3 className="text-info  text-center">New Product</h3>
                        <p className="text-center text-danger">{this.state.mymsg}</p>
                <p><label>Product Name</label><input onChange={this.handleName}  type="text" value={this.state.name} placeholder="Enter Name"  className="form-control"/> </p>
                <p><label>Product Price</label><input onChange={this.handlePrice}  type="humber"  value={this.state.price} placeholder="Enter Price"  className="form-control"/> </p>
                <p><label>Product Quantity</label><input onChange={this.handleQty}  type="number"  value={this.state.qty} placeholder="Enter Qty"  className="form-control"/> </p>
                <p><label>Product Details</label><textarea onChange={this.handleDetails}  value={this.state.details} placeholder="Enter Details"  className="form-control"></textarea> </p>
                <p className="text-center">
                    <button onClick={this.handleSubmit} id="submit"  className="btn btn-primary">Save Product</button>
                </p>
                </div>
                
                 <div className="col-md-3"></div>
                </div>;
    }
}

export default Newproduct;