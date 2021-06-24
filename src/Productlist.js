import React , {Component} from 'react';
import axios from 'axios';
class Productlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
          hits: [],
          message:""
        };
        this.fetchUser();
      }
      fetchUser = () => {
        const url = "http://localhost/reactjsphp/productlist.php";
        axios.get(url)
        .then(res=>{
         //this.alluser = res.data;
         //console.log(this.alluser);
         this.setState({ hits: res.data})
        })
        .catch(err=> console.log(err));
        }

        deleteItem =(index) =>{
          let input = new FormData();
          input.append("id", index);
          const url = "http://localhost/reactjsphp/deleteproduct.php";
          axios.post(url , input)
          .then(res=>{
                      this.setState({ message: res.data});
                      this.fetchUser();
                    })
          .catch(err=> console.log(err));
        }
    render(){
      //const { hits} = this.state;
        return <div className="row"> 
        <div className="col-md-12">
        <h3  className="text-center text-danger">Available Products : {this.state.hits.length}</h3>
        <p className="text-info text-center">{this.state.message}</p>
        <table className="table table-bordered  table-hover">
				<thead>
					<tr className="text-center text-success">
						<th>id</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
                        <th>Total Price</th>
						<th className="text-left">Details</th>
            <th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.hits.map((row,index)=>{
							return <tr key={index} className="text-center">
										<td> {row.id} </td>
										<td> {row.name} </td>
										<td> {row.price} </td>
										<td> {row.qty} </td>
                                        <td> {row.qty * row.price} </td>
										<td className="text-left"> {row.details} </td>
                    <td>
                    <button className="btn btn-danger btn-sm" onClick={this.deleteItem.bind(this, row.id)}>Delete</button>
                    </td>
									</tr>
						})
					}
				</tbody>
			</table>
            </div>
            </div>;
    }
}

export default Productlist;