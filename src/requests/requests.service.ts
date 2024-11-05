import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRepository } from './infrastructure/persistence/request.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Request } from './domain/request';

@Injectable()
export class RequestsService {
  constructor(
    // Dependencies here
    private readonly requestRepository: RequestRepository,
  ) {}

  async create(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createRequestDto: CreateRequestDto,
  ) {
    // Do not remove comment below.
    // <creating-property />

    return this.requestRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.requestRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Request['id']) {
    return this.requestRepository.findById(id);
  }

  findByIds(ids: Request['id'][]) {
    return this.requestRepository.findByIds(ids);
  }

  async update(
    id: Request['id'],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateRequestDto: UpdateRequestDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.requestRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
    });
  }

  remove(id: Request['id']) {
    return this.requestRepository.remove(id);
  }
}
