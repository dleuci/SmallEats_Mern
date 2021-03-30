import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rest = (props) => (
    <tr>
        <td>{props.restaurant.name}</td>
        <td>{props.restaurant.cuisine}</td>
        <td>{props.restaurant.cost}</td>
        <td>{props.restaurant.rating}</td>
        <td>{props.restaurant.menu}</td>
        <td>
            <Link to={"/edit/"+props.rest._id}>Update</Link>
        </td>
    </tr>
)

export default class restaurantsList extends Component {

    constructor(props) {
        super(props);
        this.state = {rests: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/rests/')
            .then(response => {
                this.setState({rests: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/rests/')
        .then(response => {
            this.setState({rests: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    restList() {
        return this.state.rests.map(function(currentrest, i) {
            return <Rest rest={currentrest} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Local Restaurants in the area:</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cuisine</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.restList() }
                    </tbody>
                </table>
            </div>
        )
    }
}