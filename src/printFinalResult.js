import { MissionUtils } from "@woowacourse/mission-utils";

export default function printFinalResult(map) {
    const MAP_TO_ARRAY = Array.from(map);
    MAP_TO_ARRAY.sort((a, b) => a[1] - b[1]);
    if(MAP_TO_ARRAY[0] !== MAP_TO_ARRAY[1]){
        //단독 우승자
        MissionUtils.Console.print(`최종 우승자 : ${map.get(MAP_TO_ARRAY[0])}`);
    }
}
