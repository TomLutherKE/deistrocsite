import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
   @Prop()
   name: string;
   @Prop()
   email: string;
   @Prop()
   city: string;
   @Prop()
   supplier: string;
   @Prop()
   category: string;
   @Prop()
   deliveryMethod: string;
   @Prop()
   paymentMethod: string;
   @Prop()
   deliveryPriority: string;
}


 
export const OrderSchema = SchemaFactory.createForClass(Order);