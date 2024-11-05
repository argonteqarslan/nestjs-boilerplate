import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';
import { EntityDocumentHelper } from '../../../../../utils/document-entity-helper';

export type RequestSchemaDocument = HydratedDocument<RequestSchemaClass>;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    getters: true,
  },
})
export class RequestSchemaClass extends EntityDocumentHelper {
  @Prop({ type: String, required: true })
  levelOfOperator: string;

  @Prop({ type: String, required: true })
  branch: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: Boolean, required: true })
  isCurrentlyEmployed: boolean;

  @Prop({ type: Date, required: true })
  transitionDate: Date;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: String })
  fileUrl: string;

  @Prop({ type: String, required: true })
  supportType: string;

  @Prop({ type: String, required: true })
  mentalHealthSupportType: string;

  @Prop({ default: now })
  createdAt: Date;

  @Prop({ default: now })
  updatedAt: Date;
}

export const RequestSchema = SchemaFactory.createForClass(RequestSchemaClass);
