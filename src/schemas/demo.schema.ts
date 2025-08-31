import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemoDocument =  Demo & Document;

type Song = {artist: string, songTitle: string};

@Schema()
export class Demo{
    @Prop({type: Number, required: true, unique: true, index: true})
    id: number;

    @Prop({type: String, required: true})
    email: string;

    @Prop({type: String, required: true})
    albumName: string;

    @Prop({type: Object, required: true})
    songList: Array<Song>;

    @Prop({type: String, required: true})
    artistProfile: string;
}

export const DemoSchema = SchemaFactory.createForClass(Demo);