import { useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "../store/atoms/count"

export function Countrendrer(){
    const count=useRecoilValue(countAtom);
    return <div>
        <b>
            {count};
        </b>
    </div>
}