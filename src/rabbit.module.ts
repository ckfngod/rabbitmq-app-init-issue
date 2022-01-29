import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { RabbitService } from './rabbit.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange',
          type: 'fanout',
        },
      ],
      uri: 'amqp://localhost',
    }),
    RabbitModule,
  ],
  providers: [RabbitService],
})
export class RabbitModule {}
