import { LoginTypeEnum } from "./typing";
import { TabsProps } from "antd";
import { formatBaseById } from "react-evefyou-common/locale";

export const loginTabItems: TabsProps['items'] = [
  {
    key: LoginTypeEnum.username,
    label: formatBaseById('modules.LoginForm.tabs.loginByUsername'),
  },
  {
    key: LoginTypeEnum.message,
    label: formatBaseById('modules.LoginForm.tabs.loginByMessage'),
  },
]