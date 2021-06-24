import React , {Component} from 'react';
import Display from './Display';
class Localstorage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user : [
                        {"name":"User One", "photo":"user1"},
                        {"name":"User Two", "photo":"user2"},
                        {"name":"User Three", "photo":"user3"},
                        {"name":"User Four", "photo":"user4"},
                        {"name":"User Five", "photo":"user5"},
                        {"name":"User Six", "photo":"user6"},
                        {"name":"User Seven", "photo":"user7"},
                        {"name":"Siyaram Ray", "photo":"user8"}
                   ],
            name:""
        }
    }
    handleName = async n => {
        await this.setState({
          name : n.target.value,
        })
    }


    saveData = () =>{
    this.setState({
            user: this.state.user.concat({"name":this.state.name, "photo":this.state.name}),
            name:"",
            msg:"User Added to list !"
        })
    }
   
    render(){
        return <>
                <div className="row">
                    <div className="col-md-12 text-center"><h3>Component With props & Parameter </h3></div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <h3> Add new element</h3>
                    <div className="border p-2">
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.handleName} />
                        </div>
                       
                        <button className="btn btn-primary btn-block" onClick={this.saveData}> Save</button>
                    </div>
                    </div>
                    <div className="col-md-9 text-center">
                        <p className="text-success">{this.state.msg}</p>
                    <div className="row">
                        {
                            this.state.user.map((row,index)=>{
                                return <Display id={index} name={row.name} photo={row.photo} />;
                            })
                        }
                    </div>
                    </div>
                </div>
               </>
    }
}

export default Localstorage;