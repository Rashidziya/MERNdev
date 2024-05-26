import { useRecoilValue } from "recoil"
import { countAtom } from "../store/atoms/count";
import { evenSelector } from "../store/atoms/count";
export function Even(){
    // console.log("Even Re-rendered");
    const isEven=useRecoilValue(evenSelector);
    // if(count%2==0){
    //     return <div>
    //         it is even.
    //     </div>
    // }
    return <div>
        {isEven?"it is even":null}
    </div>
}