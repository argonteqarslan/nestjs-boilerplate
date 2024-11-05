import { Request } from '../../../../domain/request';
import { RequestSchemaClass } from '../entities/request.schema';

export class RequestMapper {
  public static toDomain(raw: RequestSchemaClass): Request {
    const domainEntity = new Request();
    domainEntity.id = raw._id.toString();
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  public static toPersistence(domainEntity: Request): RequestSchemaClass {
    const persistenceSchema = new RequestSchemaClass();
    if (domainEntity.id) {
      persistenceSchema._id = domainEntity.id;
    }
    persistenceSchema.createdAt = domainEntity.createdAt;
    persistenceSchema.updatedAt = domainEntity.updatedAt;

    return persistenceSchema;
  }
}
