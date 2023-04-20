import { MemberAddressDto } from "src/types/apis/member/address";
import { fetchExceptionCatcher, fetchGreenbox } from "..";
const getMemberAddressApi = async (): Promise<
  FetchResponse<MemberAddressDto>
> => {
  const dto: MemberAddressDto = {
    IsLogin: true,
    CityName: "asdd",
    AreaName: "zxcz",
  };
  return {
    status: 200,
    data: dto,
  };
};

export { getMemberAddressApi };
