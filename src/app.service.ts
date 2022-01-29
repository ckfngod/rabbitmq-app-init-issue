import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
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
    try {
      const data = await lastValueFrom(this.grpcService.getHero());
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}
