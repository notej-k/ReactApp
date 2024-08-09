import { INITIALIZE_ORDERS, SetOrdersAction } from '../actions';
import { initialOrderState, orderReducer } from '../reducer';
import { Order } from '../types';

jest.mock('../../../helpers/LocalStorage');

describe('orderReducer', () => {
    const initialOrders: Order[] = [
        {
            id: '1',
            "customer-id": 'cust-1',
            items: [],
            total: '0.00',
        },
    ];

    it('should initialize orders with INITIALIZE_ORDERS action', () => {
        const action: SetOrdersAction = {
            type: INITIALIZE_ORDERS,
            payload: {
                orders: initialOrders,
            },
        };

        const newState = orderReducer(initialOrderState, action);
        expect(newState.orders).toEqual(initialOrders);
    });


});
