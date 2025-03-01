interface DynamicInputListParams {
    title?: string,
    buttonAddHandler?: () => void,
    buttonRemoveHandler?: (index: number) => void,
    values: string[],
    className?: string,
    onChangeDatalist?: (index: number, value: string) => void
}
export type { DynamicInputListParams }
