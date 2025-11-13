
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { Model } from "mongoose";
import { Order } from 'src/schema/order.schema';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private orderModel:Model<Order>) { }

async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
   const newOrder = await new this.orderModel(createOrderDto);
   return newOrder.save();
}
 
async getAllOrders(): Promise<Order[]> {
    const orderData = await this.orderModel.find();
    if (!orderData || orderData.length == 0) {
        throw new NotFoundException('Order data not found!');
    }
    return orderData;
}
    
}
