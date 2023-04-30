import * as actionTypes from '../constants/productConstants.js';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type) {

        case actionTypes.GET_PRODUCTS_REQUEST :
            return { loading: true };

        case actionTypes.GET_PRODUCTS_SUCCESS :
            return { loading: false, products: action.payload };

        case actionTypes.GET_PRODUCTS_FAILURE :
            return { loading: false, error: action.payload };
        
        default: 
            return state;
    }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type) {

        case actionTypes.GET_PRODUCT_DETAILS_REQUEST :
            return { loading: true };

        case actionTypes.PRODUCT_DETAILS_SUCCESS :
            return { loading: false, product: action.payload };

        case actionTypes.PRODUCT_DETAILS_FAILURE :
            return { loading: false, error: action.payload };

        case actionTypes.PRODUCT_DETAILS_RESET :
            return { loading: false, product: {} };
        
        default: 
            return state;
    };
};