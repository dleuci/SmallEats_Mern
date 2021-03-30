import React, {Component} from 'react';
import axios from 'axios';

export default class EditRest extends Component {

    constructor(props) {
        super(props);

        this.onChangerestaurantName  = this.onChangerestaurantName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rest_name : '',
            rest_cuisine: '',
            rest_rating: '',
            rest_menu: '',
            rest_cost: '',
            rest_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/rests/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    rest_name: response.data.rest_name,
                    rest_cuisine: response.data.rest_cuisine,
                    rest_rating: response.data.rest_rating,
                    rest_menu: response.data.rest_menu,
                    rest_cost: response.data.rest_cost
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangerestName (e) {
        this.setState({
            rest_name : e.target.value
        });
    }

    onChangerestCuisine(e) {
        this.setState({
            rest_cuisine: e.target.value
        });
    }

    onChangerestRating(e) {
        this.setState({
            rest_rating: e.target.value
        });
    }
    onChangerestMenu(e) {
        this.setState({
            rest_menu: e.target.value
        });
    }

    onChangerestCost(e) {
        this.setState({
            rest_cost: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            rest_name : this.state.rest_name ,
            rest_cuisine: this.state.rest_cuisine,
            rest_rating: this.state.rest_rating,
            rest_menu: this.state.rest_menu,
            rest_cost: this.state.rest_cost
        };
        axios.post('http://localhost:4000/rests/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Update Restaurant</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Restaurant Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_name }
                                onChange={this.onChangerestName }
                                />
                    </div>
                    <div className="form-group">
                        <label>Cuisine: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_cuisine}
                                onChange={this.onChangerestCuisine}
                                />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_rating}
                                onChange={this.onChangerestRating}
                                />
                    </div>
                    <div className="form-group">
                        <label>Menu: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_menu}
                                onChange={this.onChangerestMenu}
                                />
                    </div>
                    <div className="form-group">
                        <label>Cost: </label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$"
                                    value="$"
                                    checked={this.state.rest_cost==='$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$"
                                    value="$$"
                                    checked={this.state.rest_cost==='$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$$"
                                    value="$$$"
                                    checked={this.state.rest_cost==='$$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$$$"
                                    value="$$$$"
                                    checked={this.state.rest_cost==='$$$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$$$</label>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Restaurant" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}