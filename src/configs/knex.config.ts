import { ConfigService } from "@nestjs/config";

export const getKnexConfig = async (configService: ConfigService) => {
    return {
        config: {
            client: 'postgres',
            connection: {
                host: configService.get('DB_HOST'),
                user: configService.get('DB_USER'),
                password: configService.get('DB_PSWD'),
                database: configService.get('DB_NAME'),
                port: configService.get('DB_PORT'),
            },
            migrations: {
                directory: './migrations/pg',
                tableName: '[accounts-create.migration]'
            }
        }

    }
}