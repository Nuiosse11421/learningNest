import { Controller,Get, Body,Post } from "@nestjs/common";
@Controller('cats')
export class CatsController {
    @Post()
    create():string{
        return 'this Action adds a new cat'
    }
    @Get()
    findAll(): string{
        return 'This action returns all cats'
    }
}