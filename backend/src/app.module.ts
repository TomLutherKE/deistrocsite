import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { OrderSchema } from './schema/order.schema';

import { config } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGODB_URI, { dbName: 'orderdb' }),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
