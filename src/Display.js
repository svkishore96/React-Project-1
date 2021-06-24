import React, {Component} from 'react';

class Display extends  Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="col-md-3 form-group">
                <div className="border p-2">
                    <img src={`https://joeschmoe.io/api/v1/${this.props.photo}`}/>
                    <h4 className='text-info'>{this.props.name}</h4>
                    <p className="text-danger">{this.props.id}</p>
                 </div>
                </div>;
    }
}

export default Display;