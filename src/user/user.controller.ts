import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService

    ) { }


    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    getAllUser() {
        return this.userService.getAllUsers();
    }
}
