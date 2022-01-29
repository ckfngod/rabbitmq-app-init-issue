import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitService {
  @RabbitSubscribe({
    exchange: 'exchange',
    routingKey: '*',
    queue: 'queue',
  })
  public async eventHandler(event) {
    console.log('Handling event', event);
  }
}
