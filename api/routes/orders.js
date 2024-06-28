import express from 'express';
import {
     getAllOrders,
     getOrderById, 
     getOrdersByStatusId, 
     getOrdersByUserId, 
     createOrder, 
     updateOrder, 
     deleteOrder
} from '../controllers/order.js';

const router = express.Router();

//모든 주문 조회
router.get('/', getAllOrders);

//주문 아이디로 조회
router.get('/:id', getOrderById);

//유저 아이디로 조회
router.get('/user/:user_id', getOrdersByUserId);

//주문상태 아이디로 조회
router.get('/status/:status_id', getOrdersByStatusId);

//주문 추가하기
router.post('/', createOrder);

//주문 업데이트
router.put('/:id', updateOrder);

//주문 삭제하기
router.delete('/:id', deleteOrder);


export default router;
