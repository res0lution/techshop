import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { FileModule } from './file/file.module'
import { StoreModule } from './store/store.module'
import { StatisticsModule } from './statistics/statistics.module'
import { ProductModule } from './product/product.module'
import { ColorModule } from './color/color.module'
import { ReviewModule } from './review/review.module'
import { OrderModule } from './order/order.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		CategoryModule,
		FileModule,
		StoreModule,
		StatisticsModule,
		ProductModule,
		ColorModule,
		ReviewModule,
		OrderModule
	]
})
export class AppModule {}
