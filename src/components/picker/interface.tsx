export interface PickerColumnProps {
  options: string[]
  name: string
  value: string
  itemHeight: number
  columnHeight: number
  onChange: (name: string, value: string) => void
  onClick: (name: string, value: string) => void
}
export interface PickerPanelProps {
  optionGroups: object
  valueGroups: object
  onChange: (name: string, value: string) => void
  onClick: (name: string, value: string) => void
  itemHeight: number
  height: number
}
