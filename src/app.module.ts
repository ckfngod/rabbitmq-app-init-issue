import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcModule } from './grpc.module';
import { RabbitModule } from './rabbit.module';

@Module({
  imports: [RabbitModule, GrpcModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
