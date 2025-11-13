
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) { }

    @Post()
   async createOrder(@Res() response, @Body() createOrderDto: CreateOrderDto) {
        try {
            const newOrder = await this.orderService.createOrder(createOrderDto);
            return response.status(HttpStatus.CREATED).json({
            message: 'Order has been placed successfully',newOrder,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Order has not been placed!',
            error: 'Bad Request'
        });
        }
    }

    @Get()
    async getOrders(@Res() response) {
        try {
            const OrderData = await this.orderService.getAllOrders();
            return response.status(HttpStatus.OK).json({
            message: 'All order data found successfully',OrderData,});
            } catch (err) {
            return response.status(err.status).json(err.response);
                }
    }


}


