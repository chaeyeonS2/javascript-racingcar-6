import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //1. 경주할 자동차 이름 받기
    const USER_INPUT_STRING = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    //자동차 쉼표로 분리해서 저장

  }
}

export default App;
