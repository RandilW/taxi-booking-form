import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from "@/registry/new-york/ui/select"

type SelectItemsProps = {
    data: { label: string; value: string; icon?: React.ElementType }[];
    label: string;
    placeholder: string;
    onChange: (value: string) => void;
};

export function SelectItems({ data, label, placeholder, onChange }: SelectItemsProps) {
    const handleSelectChange = (value) => {
        onChange(value);
    };
    return (
        <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={`Select a ${placeholder}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {data.map((item) => {
                        const Icon = item.icon
                        return (
                            <SelectItem key={item.value} value={item.value}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    {Icon && <Icon style={{marginRight: '8px'}}/>}
                                    {item.label}
                                </div>
                            </SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
