import React, {Component} from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {
    /*
    state = {
        ingredients: null,
        price: 0
    }
    */

    /*
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0]==='price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }
    */

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings} 
                    onCheckoutCancelled={this.checkoutCancelledHandler} 
                    onCheckoutContinued={this.checkoutContinuedHandler}>
                        jhffh
                </CheckoutSummary>
                <Route path={this.props.match.path+'/contact-data'} component={ContactData}></Route>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);