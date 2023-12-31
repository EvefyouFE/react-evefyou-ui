import { Space, Tabs } from 'antd';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { useDesign } from 'react-evefyou-hooks/useDesign';
import './LoginForm.less';
import { LoginByMessage } from './components/LoginByMessage';
import { LoginByQrCode } from './components/LoginByQrCode';
import { LoginByUsername } from './components/LoginByUsername';
import { LoginTypeEnum } from "./typing";
import { LoginFormProps } from "./props";
import 'virtual:windi.css';
import { loginTabItems } from "./login.data";

export const LoginForm: FC<LoginFormProps> = ({
  isLogging,
  weChatLogo,
  qqLogo,
  title = 'Admin',
  onLogin
}) => {
  const [loginType, setLoginType] = useState<`${LoginTypeEnum}`>(
    LoginTypeEnum.username,
  );
  const { prefixCls } = useDesign('login-form');

  let children;
  const formHeader = (
    <h1 className="w-full flex justify-center items-center">{title}</h1>
  );
  switch (loginType) {
    case LoginTypeEnum.username:
      children = (
        <>
          {formHeader}
          <LoginByUsername onLogin={onLogin} isLogging={isLogging} />
        </>
      );
      break;
    case LoginTypeEnum.message:
      children = (
        <>
          {formHeader}
          <LoginByMessage />
        </>
      );
      break;
    case LoginTypeEnum.wechat:
    case LoginTypeEnum.qq:
    default:
      children = <LoginByQrCode loginType={loginType} />;
      break;
  }

  const rootClsName = classNames(
    prefixCls,
    'flex flex-col justify-between w-100 h-100',
  );

  return (
    <div className={rootClsName}>
      <Tabs
        size="large"
        centered
        defaultActiveKey={LoginTypeEnum.username}
        items={loginTabItems}
        animated
        onTabClick={(key: string) => setLoginType(key as `${LoginTypeEnum}`)}
      />
      {children}
      <div
        className="flex justify-between items-center"
        style={{
          padding: '1.5rem',
          height: '2rem',
        }}
      >
        <Space align="center" direction="horizontal">
          {
            weChatLogo && <span
              className={`${prefixCls}-wechat-logo cursor-pointer`}
              onClick={() => setLoginType(LoginTypeEnum.wechat)}
            >
              {weChatLogo}
            </span>
          }
          {
            qqLogo && <span
              className={`${prefixCls}-qq-logo cursor-pointer`}
              onClick={() => setLoginType(LoginTypeEnum.qq)}
            >
              {qqLogo}
            </span>
          }
        </Space>
        <a href="/">{'注册 >'}</a>
      </div>
    </div>
  );
};

