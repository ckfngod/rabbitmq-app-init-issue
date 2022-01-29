import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

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
  ],
})
export class RabbitModule {}
