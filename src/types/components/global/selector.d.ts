type SelectorProperties<TOption> = {
    onSelected: (data: TOption) => void
    items: SelectorItem<TOption>[]
}

type SelectorItem<TOption> = {
    key: string
    name: string
    value: TOption
}

export {
    SelectorProperties,
    SelectorItem
}