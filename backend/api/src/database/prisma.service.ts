import { Injectable, INestApplication } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient {}