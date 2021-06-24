import React , {Component} from 'react';
class Array2 extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:"",
            items:[{"name":"Apple", "price":200, "qty":5},{"name":"Mango", "price":100, "qty":15}],
            name:"",
            price:10,
            qty:10,
            msg:"",
            editIndex:-1,
            btnText:"Save Item"
        }
    }

    

    handleName = async n => {
        await this.setState({
          name : n.target.value,
        })
    }

    handlePrice = async p => {
        await this.setState({
          price: p.target.value
        })
    }

    handleQty = async q => {
        await this.setState({
          qty: q.target.value
        })
    }
    saveData = () =>{
        if(this.state.editIndex == -1){
    this.setState({
    items: this.state.items.concat({"name":this.state.name, "price":this.state.price, "qty":this.state.qty}),
    name:"",
    price:0,
    qty:0,
    msg:"Item Added To List"
        })
    }else{
        this.state.items[this.state.editIndex].name = this.state.name;
        this.state.items[this.state.editIndex].price = this.state.price;
        this.state.items[this.state.editIndex].qty = this.state.qty;
        this.setState({
            items: this.state.items,
            name:"",
            price:0,
            qty:0,
            msg:"Item Updated successfully !",
            btnText : "Save Item"
                })
    }
    }

    deleteItem=(index)=>{
        this.state.items.splice(index , 1);
        this.setState({
            items: this.state.items,
            msg:"Item deleted successfully from list !"
                })
    }

    edititem=(index)=>{
        this.setState({
        name:this.state.items[index].name,
        price:this.state.items[index].price,
        qty:this.state.items[index].qty,
        editIndex:index,
        btnText : "Update Item"
            })
    }
    
    render(){
        return <div className="row">
                <div className="col-md-3">
                    <h3> Add new element</h3>
                    <div className="border p-2">
                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.handleName} />
                        </div>
                        <div className="form-group">
                            <label>Item Price</label>
                            <input type="text" className="form-control" value={this.state.price} onChange={this.handlePrice} />
                        </div>
                        <div className="form-group">
                            <label>Item Quantity</label>
                            <input type="text" className="form-control" value={this.state.qty} onChange={this.handleQty} />
                        </div>
                        <button className="btn btn-danger btn-block" onClick={this.saveData}> {this.state.btnText} </button>
                    </div>
                </div>
                <div className="col-md-9">
                    <h3 className="text-center">{this.state.items.length} : Multi Dimensional Array  Operation</h3>
                    <p className="text-center text-danger">{this.state.msg}</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                               <th>Id</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map((row, index)=>{
                                    return<tr key={index}>
                                        <td> {index} </td>
                                        <td> {row.name} </td>
                                        <td> {row.price} </td>
                                        <td> {row.qty} </td>
                                        <td> 
                                            <button className="btn btn-warning btn-sm" onClick={this.edititem.bind(this, index)}>Edit</button>
                                            &nbsp; &nbsp;
                                            <button className="btn btn-danger btn-sm" onClick={this.deleteItem.bind(this, index)}>Delete</button>
                                        </td>
                                    </tr>;
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    }
}

export default Array2;