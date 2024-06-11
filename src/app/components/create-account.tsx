"use client"

import {Icons} from "@/components/icons"
import {Button} from "@/registry/new-york/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/registry/new-york/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/registry/new-york/ui/select"
import {Input} from "@/registry/new-york/ui/input"
import {Label} from "@/registry/new-york/ui/label"
import DatePickerWithRange from "@/registry/new-york/ui/date-picker-with-range";
import {TimePicker} from "@/registry/new-york/ui/date-time-picker/time-picker";
import {stateOptions, numPassengers} from '../data/data';
import {Textarea} from "@/registry/new-york/ui/textarea";
import {Avatar, AvatarFallback, AvatarImage} from "@/registry/new-york/ui/avatar";

export function DemoCreateAccount() {
    return (
        <Card>
            <div className="relative pt-5 pl-5">
                <div
                    className="absolute inset-0 bg-[url('/taxi-car-image.png')] bg-cover bg-center filter blur-sm opacity-75 h-[160px]"></div>
                <img src="/logo.png" alt="Logo" className="relative z-10 w-[120px] h-[120px]"/>
            </div>


            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Online Booking Form</CardTitle>
                <CardDescription>
                    To reserve seats please complete and submit the booking form.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <Icons.gitHub className="mr-2 h-4 w-4"/>
                        Github
                    </Button>
                    <Button variant="outline">
                        <Icons.google className="mr-2 h-4 w-4"/>
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"/>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="dueDate">
                            Date
                        </Label>
                        <DatePickerWithRange className="[&>button]:w-[260px]"/>
                        <TimePicker/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dueDate">
                            Time
                        </Label>
                        <TimePicker/>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="dueDate">
                        Number of Passengers
                    </Label>
                    <Select defaultValue="1">
                        <SelectTrigger id="state">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            {numPassengers.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="lastName">Pick Up Address</Label>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Street
                        Address</Label>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Street Address Line
                        2</Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <Input id="streetAddress" placeholder=""/>
                            <Label htmlFor="lastName"
                                   className="text-xs font-normal text-gray-500 pt-2">City</Label>
                        </div>
                        <div className="flex flex-col">
                            <Select defaultValue="TX - Texas">
                                <SelectTrigger id="state">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {stateOptions.map((option) => (
                                        <SelectItem key={option.value}
                                                    value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Label htmlFor="state"
                                   className="text-xs font-normal text-gray-500 pt-2">State</Label>
                        </div>
                    </div>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Zip Code</Label>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="lastName">Destination Address</Label>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Street
                        Address</Label>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Street Address Line
                        2</Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <Input id="streetAddress" placeholder=""/>
                            <Label htmlFor="lastName"
                                   className="text-xs font-normal text-gray-500 pt-2">City</Label>
                        </div>
                        <div className="flex flex-col">
                            <Select defaultValue="TX - Texas">
                                <SelectTrigger id="state">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {stateOptions.map((option) => (
                                        <SelectItem key={option.value}
                                                    value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Label htmlFor="state"
                                   className="text-xs font-normal text-gray-500 pt-2">State</Label>
                        </div>
                    </div>
                    <Input id="streetAddress" placeholder=""/>
                    <Label htmlFor="lastName" className="text-xs font-normal text-gray-500">Zip Code</Label>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description">Additional Message</Label>
                    <Textarea
                        id="description"
                        placeholder="Please include all information relevant to your ride."
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Book a Taxi</Button>
            </CardFooter>
        </Card>
    )
}
