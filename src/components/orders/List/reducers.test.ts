import { storeOrdersInLocalStorage } from '../../../helpers/LocalStorage';
import { ADD_ITEM, AddItemAction, INITIALIZE_ORDERS, SetOrdersAction } from '../actions';
import { initialOrderState, orderReducer } from '../reducer';
import { Order, OrderItem } from '../types';

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

    it('should add a new item to an existing order', () => {
        const action: AddItemAction = {
            type: ADD_ITEM,
            payload: {
                orderId: '1',
                productId: 'prod-1',
                quantity: 2,
                productPrice: '10.00',
            },
        };

        const state = {
            orders: initialOrders,
        };

        const expectedItems: OrderItem[] = [
            {
                'product-id': 'prod-1',
                quantity: '2',
                'unit-price': '10.00',
                total: '20.00',
            },
        ];

        const newState = orderReducer(state, action);
        expect(newState.orders[0].items).toEqual(expectedItems);
        expect(newState.orders[0].total).toBe('20.00');
        expect(storeOrdersInLocalStorage).toHaveBeenCalledWith(newState.orders);
    });
});
