import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema, RequestSchemaClass } from './entities/request.schema';
import { RequestRepository } from '../request.repository';
import { RequestDocumentRepository } from './repositories/request.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RequestSchemaClass.name, schema: RequestSchema },
    ]),
  ],
  providers: [
    {
      provide: RequestRepository,
      useClass: RequestDocumentRepository,
    },
  ],
  exports: [RequestRepository],
})
export class DocumentRequestPersistenceModule {}
