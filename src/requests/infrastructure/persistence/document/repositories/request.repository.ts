import { Injectable } from '@nestjs/common';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestSchemaClass } from '../entities/request.schema';
import { RequestRepository } from '../../request.repository';
import { Request } from '../../../../domain/request';
import { RequestMapper } from '../mappers/request.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class RequestDocumentRepository implements RequestRepository {
  constructor(
    @InjectModel(RequestSchemaClass.name)
    private readonly requestModel: Model<RequestSchemaClass>,
  ) {}

  async create(data: Request): Promise<Request> {
    const persistenceModel = RequestMapper.toPersistence(data);
    const createdEntity = new this.requestModel(persistenceModel);
    const entityObject = await createdEntity.save();
    return RequestMapper.toDomain(entityObject);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Request[]> {
    const entityObjects = await this.requestModel
      .find()
      .skip((paginationOptions.page - 1) * paginationOptions.limit)
      .limit(paginationOptions.limit);

    return entityObjects.map((entityObject) =>
      RequestMapper.toDomain(entityObject),
    );
  }

  async findById(id: Request['id']): Promise<NullableType<Request>> {
    const entityObject = await this.requestModel.findById(id);
    return entityObject ? RequestMapper.toDomain(entityObject) : null;
  }

  async findByIds(ids: Request['id'][]): Promise<Request[]> {
    const entityObjects = await this.requestModel.find({ _id: { $in: ids } });
    return entityObjects.map((entityObject) =>
      RequestMapper.toDomain(entityObject),
    );
  }

  async update(
    id: Request['id'],
    payload: Partial<Request>,
  ): Promise<NullableType<Request>> {
    const clonedPayload = { ...payload };
    delete clonedPayload.id;

    const filter = { _id: id.toString() };
    const entity = await this.requestModel.findOne(filter);

    if (!entity) {
      throw new Error('Record not found');
    }

    const entityObject = await this.requestModel.findOneAndUpdate(
      filter,
      RequestMapper.toPersistence({
        ...RequestMapper.toDomain(entity),
        ...clonedPayload,
      }),
      { new: true },
    );

    return entityObject ? RequestMapper.toDomain(entityObject) : null;
  }

  async remove(id: Request['id']): Promise<void> {
    await this.requestModel.deleteOne({ _id: id });
  }
}
