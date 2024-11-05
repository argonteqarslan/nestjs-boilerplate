import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { DocumentRequestPersistenceModule } from './infrastructure/persistence/document/document-persistence.module';

@Module({
  imports: [
    // import modules, etc.
    DocumentRequestPersistenceModule,
  ],
  controllers: [RequestsController],
  providers: [RequestsService],
  exports: [RequestsService, DocumentRequestPersistenceModule],
})
export class RequestsModule {}
