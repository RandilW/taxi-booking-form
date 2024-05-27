// AddTask.tsx
import {Button} from "@/registry/new-york/ui/button"
import {toast} from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/registry/new-york/ui/dialog"
import {Input} from "@/registry/new-york/ui/input"
import {Label} from "@/registry/new-york/ui/label"
import {PlusIcon} from "@radix-ui/react-icons";
import {DatePicker} from "./date-picker"
import {SelectItems} from "./select-items"
import * as React from "react";
import {statuses, priorities, classes, labels} from "@/app/data/data";
import {DataTableFacetedFilter} from "@/app/components/data-table-faceted-filter";
import {Toaster} from "@/registry/new-york/ui/sonner";

export function AddTask() {
    const [classValue, setClassValue] = React.useState('');
    const [taskValue, setTaskValue] = React.useState('');
    const [dueDateValue, setDueDateValue] = React.useState(new Date());
    const [priorityValue, setPriorityValue] = React.useState('');
    const [statusValue, setStatusValue] = React.useState('');
    const [LabelValue, setLabelValue] = React.useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTaskValue(event.target.value);
    };

    const handleSubmit = async () => {
        const newTask = {
            id: classValue,
            title: taskValue,
            status: statusValue,
            label: LabelValue,
            priority: priorityValue,
            dueDate: dueDateValue,
        };

        // Send the new task data to your server
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        if (response.ok) {

            // Show a toast notification when the task is successfully added
            toast("Task has been added", {
                description: `Task ${taskValue} has been added.`,
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });

        } else {
            // Handle error...
        }
    };

    return (
        <><Toaster/>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="h-8 px-2 lg:px-3 ml-2" variant="outline"><PlusIcon className="mr-2 h-4 w-4"/> Add
                        Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add a new task</DialogTitle>
                        <DialogDescription>
                            Add assignments and tasks from your classes here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="class" className="text-right">
                                Class
                            </Label>
                            <SelectItems data={classes} label="Classes" placeholder="Class" onChange={setClassValue}/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input id="task" placeholder="HW 12.4 on WebAssign." className="col-span-3"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="dueDate" className="text-right">
                                Due Date
                            </Label>
                            <DatePicker onChange={setDueDateValue}/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="priority" className="text-right">
                                Priority
                            </Label>
                            <SelectItems data={priorities} label="Priorities" placeholder="Priority"
                                         onChange={setPriorityValue}/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>
                            <SelectItems data={statuses} label="Statuses" placeholder="Status"
                                         onChange={setStatusValue}/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Type
                            </Label>
                            <SelectItems data={labels} label="Types" placeholder="Type" onChange={setLabelValue}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit" onClick={handleSubmit}>Add Task</Button>
                        </DialogClose>
                    </DialogFooter>

                </DialogContent>
            </Dialog></>

    )
}
