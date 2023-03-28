export interface OptionProps {
  id: number;
  name: string;
}

export interface DropdownProps {
  labelText?: string;
  options: OptionProps[];
  name: string;
  value: string;
  selectText?: string;
  onChangeHandler: (value: string) => void;
}
