import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlbumDocument =  Album & Document;

type Song = {artist: string, songTitle: string};

@Schema()
export class Album{
    @Prop({type: Number, required: true, unique: true, index: true})
    id: number;

    @Prop({type: String, required: true})
    albumID: string;

    @Prop({type: String, required: true})
    albumName: string;

    @Prop({type: Object, required: true})
    songList: Array<Song>;

    @Prop({type: Date, required: true})
    releasedDate: Date;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
