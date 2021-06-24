import React , {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Profile from './Profile';

const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

class Multirouting extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const { path } = this.props.match;
        return <div className="row">
            <div className="col-md-3">

                <ul className="list-group">
                    <Link to={`${path}`} className="list-group-item">Profile</Link>
                    <Link to={`${path}/comments`} className="list-group-item">Comments</Link>
                    <Link to={`${path}/contact`} className="list-group-item">Contact</Link>
                </ul>

            </div>
            <div className="col-md-9">
            <h1>Hey welcome home!</h1>
                <Switch>
                    <Route path={`${path}`} exact component={Profile} />
                    <Route path={`${path}/comments`} component={Comments} />
                    <Route path={`${path}/contact`} component={Contact} />
                </Switch>
            </div>
        </div>;
    }
}

export default Multirouting;