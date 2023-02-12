import { Ctx, Hears, Help, Start, Update } from 'nestjs-telegraf';

@Update()
export class AppUpdate {
  @Start()
  start() {
    return '우영푸드빌 훔치기 초기화 test';
  }

  @Help()
  help(): string {
    return '어떤 메뉴를 알고싶으세요?';
  }

  @Hears('menu')
  menu(): string {
    return '봇 준비중';
  }

  @Hears('😀')
  sticker(): string {
    return '😁';
  }

  @Hears(/(.+)/gm)
  hears(@Ctx() ctx): string {
    // console.log(ctx);
    console.log('FromChat Id===== > ', ctx.update.message.from.id);
    return ctx.update.message.text;
  }
}
