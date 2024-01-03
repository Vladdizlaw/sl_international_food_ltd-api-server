import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		// logger: console,
	})
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)
	app.setGlobalPrefix('api')
	const config = new DocumentBuilder()
		.setTitle('SL_INTERNATIONAL_FOODS_LTD-API')
		.setDescription('The  API description')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('doc', app, document)
	app.enableCors()
	await app.listen(3000)
}
bootstrap()
