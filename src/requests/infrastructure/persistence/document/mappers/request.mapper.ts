import { Request } from '../../../../domain/request';
import { RequestSchemaClass } from '../entities/request.schema';

export class RequestMapper {
  public static toDomain(raw: RequestSchemaClass): Request {
    const domainEntity = new Request();
    domainEntity.levelOfOperator = raw.levelOfOperator;
    domainEntity.branch = raw.branch;
    domainEntity.lastName = raw.lastName;
    domainEntity.firstName = raw.firstName;
    domainEntity.isCurrentlyEmployed = raw.isCurrentlyEmployed;
    domainEntity.transitionDate = raw.transitionDate;
    domainEntity.location = raw.location;
    domainEntity.fileUrl = raw.fileUrl;
    domainEntity.supportType = raw.supportType;
    domainEntity.mentalHealthSupportType = raw.mentalHealthSupportType;
    domainEntity.id = raw._id.toString();
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  public static toPersistence(domainEntity: Request): RequestSchemaClass {
    const persistenceSchema = new RequestSchemaClass();
    persistenceSchema.levelOfOperator = domainEntity.levelOfOperator;
    persistenceSchema.branch = domainEntity.branch;
    persistenceSchema.lastName = domainEntity.lastName;
    persistenceSchema.firstName = domainEntity.firstName;
    persistenceSchema.isCurrentlyEmployed = domainEntity.isCurrentlyEmployed;
    persistenceSchema.transitionDate = domainEntity.transitionDate;
    persistenceSchema.location = domainEntity.location;
    persistenceSchema.fileUrl = domainEntity.fileUrl;
    persistenceSchema.supportType = domainEntity.supportType;
    persistenceSchema.mentalHealthSupportType = domainEntity.mentalHealthSupportType;
    if (domainEntity.id) {
      persistenceSchema._id = domainEntity.id;
    }
    persistenceSchema.createdAt = domainEntity.createdAt;
    persistenceSchema.updatedAt = domainEntity.updatedAt;

    return persistenceSchema;
  }
}
