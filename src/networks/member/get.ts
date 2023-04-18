import { MemberAddressDto } from "src/types/apis/member/address";
import { fetchExceptionCatcher, fetchGreenbox } from "..";

const getMemberAddressApi = async (): Promise<FetchResponse<MemberAddressDto>> => {
    return await fetchExceptionCatcher(fetchGreenbox("api/Cart/GetVolunteersAddress"))
}

export {
    getMemberAddressApi
}