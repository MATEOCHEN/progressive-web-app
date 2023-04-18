import { useEffect, useState } from "react"
import { SAMEDAY_DELIVERY_COOKIE } from "src/constants/web/cookies"
import { cityAreaToLocation } from "src/libs/member/location"
import { getBooleanFromCookie, getValueFromCookie } from "src/libs/persistents/cookie"
import { checkIsSameDayApi, preCheckIsSameDayApi } from "src/networks/cart/get"
import { getMemberAddressApi } from "src/networks/member"
import { LocationSelectItem, LocationSelectorProperties } from "src/types/components/cart/location"
import AreaSelector from "./areaSelector"
import CitySelector from "./citySelector"

const LocationSelector = ({ ...props }: LocationSelectorProperties) => {
    const [location, setLocation] = useState<LocationSelectItem>()
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const [isSameDay, setIsSameDay] = useState<boolean>(false)

    const setSameDayProperty = (sameDay: boolean) => {
        setIsSameDay(sameDay)
        props.onSelected(sameDay)
    }

    const submitSameDayCheck = () => {
        if (!location) return

        checkIsSameDayApi(location.zipCode).then(res => {
            if (res.status === 200 && res.data !== undefined) {
                setSameDayProperty(res.data)
            } else {
                setIsChecked(false)
            }
        }).finally(() => {
            setIsChecked(true)
        })
    }

    const getMemberAddress = () => {
        getMemberAddressApi().then(res => {
            if (res.status === 200 && res.data && res.data?.IsLogin) {
                const tempLocation = cityAreaToLocation(res.data.CityName, res.data.AreaName)

                setLocation(tempLocation)

                checkIsSameDayApi(tempLocation.zipCode).then(res => {
                    if (res.status === 200 && res.data !== undefined) {
                        setSameDayProperty(res.data)
                    } else {
                        setIsChecked(false)
                    }
                })
            } else {
                setIsChecked(false)
            }
        })
    }

    const checkIsSameDay = () => {
        const isSameDay = getBooleanFromCookie(SAMEDAY_DELIVERY_COOKIE, () => {
            getMemberAddress()
        })

        setSameDayProperty(isSameDay)
    }

    const preCheckLocation = (location: LocationSelectItem) => {
        if (location) {
            preCheckIsSameDayApi(location.zipCode).then(res => {
                if (res.status === 200 && res.data !== undefined) {
                    setIsSameDay(res.data)
                }
            })
        }
    }

    const sendIsNotSameDay = () => {
        checkIsSameDayApi("").then(res => {
            setSameDayProperty(false)
        }).finally(() => {
            setIsChecked(true)
        })
    }

    const onCitySelected = (cityName: string) => {
        if (location) {
            setLocation({ ...location, cityName: cityName })
        } else {
            setLocation({
                cityName: cityName,
                areaName: "",
                zipCode: ""
            })
        }
    }

    const onAreaSelected = (areaName: string, zipCode: string) => {
        if (location) {
            const newLocation = { ...location, areaName: areaName, zipCode: zipCode }

            setLocation(newLocation)
            preCheckLocation(newLocation)
        }
    }

    useEffect(() => {
        checkIsSameDay()
    }, [])

    return (
        <>
            {
                !isChecked ?
                    <div className="absolute w-full h-full bg-gray-opacity z-50">
                        <div className="p-2 mt-12 bg-gb-green-light border-gb-green border rounded-sm">
                            <h4 className="text-center text-gb-green my-1">請選擇地區確認是否為當日配區域</h4>
                            <div className="flex py-2">
                                <CitySelector
                                    onSelected={onCitySelected}
                                />
                                <AreaSelector
                                    cityName={location?.cityName}
                                    onSelected={onAreaSelected}
                                />
                            </div>
                            <div>
                                {
                                    isSameDay
                                        ? <p
                                            className="text-center text-xs text-gb-green my-1"
                                        >目前地區為當日配送區域</p>
                                        : <p
                                            className="text-center text-xs text-[#ff0000] my-1"
                                        >
                                            目前地區非當日配區域
                                        </p>
                                }
                            </div>
                            <div className="grid gap-2 grid-cols-6 py-2">
                                <button
                                    className="default-btn col-span-3 py-1 bg-gb-green text-[#fff] rounded-md"
                                    type="button"
                                    onClick={submitSameDayCheck}
                                >
                                    確認
                                </button>
                                <button
                                    type="button"
                                    className="default-btn col-span-3 py-1 bg-[#ff0000] text-[#fff] rounded-md"
                                    onClick={sendIsNotSameDay}
                                >
                                    取消
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    : <></>
            }
        </>
    )
}

export default LocationSelector