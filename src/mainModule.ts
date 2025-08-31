import { Module } from "@nestjs/common";

import { ReleaseModule } from "./controller/release/releaseModule";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ReleaseModule,
    MongooseModule.forRoot('mongodb://'), // Configure your MongoDB connection
  ],
})
export class mainModule {}
