import { useEffect, useRef, useState } from "react"
import Forward from "src/components/icons/forward"
import useAnimation from "src/hooks/useAnimation"
import { fadeYAnimation } from "src/libs/animations/fade"
import { SelectorItem, SelectorProperties } from "src/types/components/global/selector"

const Selector = <TOption,>({ ...props }: SelectorProperties<TOption>) => {
    const optionsRef = useRef<HTMLDivElement>(null)
    const [selectorOpen, setSelectorOpen] = useState(false)
    const [selected, setSelected] = useState<SelectorItem<TOption>>()

    const animations = useAnimation({
        ref: optionsRef,
        animation: fadeYAnimation
    })

    const onSelectorClick = () => {
        setSelectorOpen(!selectorOpen)
    }

    const onItemClicked = (item: SelectorItem<TOption>) => {
        setSelected(item)
        setSelectorOpen(false)
        props.onSelected(item.value)
    }

    useEffect(() => {
        if (props.items.length > 0) {
            setSelected(props.items[0])
        }
    }, [props.items])

    useEffect(() => {
        if (selectorOpen) {
            animations.begin()
        } else {
            animations.reverse()
        }
    }, [selectorOpen])

    return (
        <div className="relative w-full">
            <div
                className={`bg-[#fff] cursor-pointer border border-solid shadow-sm rounded-md px-2 border-[#9b9b9b] flex justify-between items-center min-h-[40px]`}
                onClick={onSelectorClick}
            >
                <span>
                    {selected?.key}
                </span>
                <div className="w-3 h-3">
                    <Forward className={`${selectorOpen ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
            <div
                className={`max-h-[200px] overflow-y-auto exclude-display-none absolute z-[10002] w-full mt-1 border rounded-md p-2 bg-[#fff] border-[#9b9b9b]`}
                ref={optionsRef}
            >
                {
                    props.items.map((item, index) => {
                        return (
                            <button
                                key={item.key}
                                onClick={() => onItemClicked(item)}
                                style={{
                                    backgroundColor: selected?.key === item.key ? "#4ba83b" : "#ffffff",
                                    color: selected?.key === item.key ? "#ffffff" : "#000000"
                                }}
                                className="cursor-pointer default-btn py-1 px-2 rounded-md w-full text-left"
                            >
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
            {
                selectorOpen
                    ? <div
                        className="top-0 left-0 fixed w-screen h-screen bg-opacity-0 z-[10001]"
                        onClick={() => setSelectorOpen(false)}
                    ></div>
                    : <></>
            }
        </div>
    )
}

export default Selector