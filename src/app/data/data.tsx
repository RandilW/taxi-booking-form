import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "report",
    label: "Report",
  },
  {
    value: "test",
    label: "Test",
  },
  {
    value: "quiz",
    label: "Quiz",
  },
  {
    value: "assignment",
    label: "Assignment",
  },
  {
    value: "homework",
    label: "Homework",
  },
]

export const statuses = [
  {
    value: "moved",
    label: "Moved",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]

export const classes = [
  {
    label: "ENGR 217",
    value: "ENGR 217",
  },
  {
    label: "MATH 251",
    value: "MATH 251",
  },
  {
    label: "MATH 308",
    value: "MATH 308",
  },
  {
    label: "PHYS 2326",
    value: "PHYS 2326",
  },
]