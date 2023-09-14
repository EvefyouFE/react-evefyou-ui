import { BasicTabsProps } from "react-evefyou-components/BasicTabs";
import { PopoverProps } from "antd";

export interface ReminderPopoverTabsProps extends PopoverProps, BasicTabsProps {
  contentCls?: string;
}