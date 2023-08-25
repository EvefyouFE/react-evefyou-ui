/*
* @Author: EvefyouFE
* @Date: 2023-08-16 14:28:09
 * @FilePath: \react-evefyou-ui\ui\locale\locale.ts
* @Description: 
* Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
* Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
*/
import React from 'react';
import enUS from './en_US';
import { FormattedMessage, MessageDescriptor, PrimitiveType, useIntl } from 'react-intl';

type UiId = keyof typeof enUS;
type UiFormatXMLElementFn<T, R = string | T | (string | T)[]> = (parts: Array<string | T>) => R;
type UiValues = Record<string, React.ReactNode | PrimitiveType | UiFormatXMLElementFn<React.ReactNode, React.ReactNode>>;
interface UiProps extends MessageDescriptor {
  id: UiId;
  values?: UiValues;
}
type UiFormatMessageProps = (descriptor: UiProps, values?: UiValues) => string;

export const useUiLocale = () => {
  const { formatMessage: _formatMessage } = useIntl();
  const formatMessage: UiFormatMessageProps = _formatMessage;
  const formatById = (id: UiId, values?: UiValues) => formatMessage({ id }, values);
  return {
    formatMessage,
    formatById
  };
};
export function formatUiMessage({ id, values }: UiProps): React.ReactNode {
  return React.createElement(FormattedMessage, {
    id,
    values,
    key: id
  })
}

export function formatUiById(id: UiId, values?: UiValues) {
  return formatUiMessage({ id, values })
}


