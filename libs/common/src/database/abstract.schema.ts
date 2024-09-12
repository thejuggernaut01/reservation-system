import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

// This a base document (like an abstract class) that contains common fields or
// properties shared by multiple collections or document types. This base
// document is never instantiated directly but is extended by other more
// specific documents (subclasses) that inherit its fields.

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
}
