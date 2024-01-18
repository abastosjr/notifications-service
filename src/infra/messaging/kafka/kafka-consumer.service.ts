import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['main-feline-12138-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bWFpbi1mZWxpbmUtMTIxMzgkxryimVGAk8104LR1_beMxBCAueNBUxNwTlX8nAg',
          password:
            'oFU0ndEl01t_jpsQAPb1gcSDQts6FycLgZ2QUDFnAJ9s5ybD-m-DO5wYFw7CIa8kXrgoHQ==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
