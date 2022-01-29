import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { GrpcService } from './grpc.service';

@Injectable()
export class AppService {
  constructor(private readonly grpcService: GrpcService) {}

  @RabbitSubscribe({
    exchange: 'exchange',
    routingKey: '*',
    queue: 'queue',
  })
  public async eventHandler(event) {
    console.log('Handling event', event);
    this.grpcService.getHero();
  }
}
