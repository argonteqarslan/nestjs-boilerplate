import { Injectable } from '@nestjs/common';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Request } from './domain/request';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRepository } from './infrastructure/persistence/request.repository';

@Injectable()
export class RequestsService {
  constructor(
    private readonly requestRepository: RequestRepository,
  ) {}

  async create(createRequestDto: CreateRequestDto) {
    // <creating-property />

    return this.requestRepository.create({
      // <creating-property-payload />
      levelOfOperator: createRequestDto.levelOfOperator,
      branch: createRequestDto.branch,
      lastName: createRequestDto.lastName,
      firstName: createRequestDto.firstName,
      isCurrentlyEmployed: createRequestDto.isCurrentlyEmployed,
      transitionDate: createRequestDto.transitionDate,
      location: createRequestDto.location,
      fileUrl: createRequestDto.fileUrl,
      supportType: createRequestDto.supportType,
      mentalHealthSupportType: createRequestDto.mentalHealthSupportType,
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
    updateRequestDto: UpdateRequestDto,
  ) {
    // <updating-property />

    return this.requestRepository.update(id, {
      // <updating-property-payload />
      levelOfOperator: updateRequestDto.levelOfOperator,
      branch: updateRequestDto.branch,
      lastName: updateRequestDto.lastName,
      firstName: updateRequestDto.firstName,
      isCurrentlyEmployed: updateRequestDto.isCurrentlyEmployed,
      transitionDate: updateRequestDto.transitionDate,
      location: updateRequestDto.location,
      fileUrl: updateRequestDto.fileUrl,
      supportType: updateRequestDto.supportType,
      mentalHealthSupportType: updateRequestDto.mentalHealthSupportType,
    });
  }

  remove(id: Request['id']) {
    return this.requestRepository.remove(id);
  }
}
