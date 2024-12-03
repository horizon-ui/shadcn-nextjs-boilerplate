import React from 'react';

export default function InnerContent(props) {
  const { children, extra, ...rest } = props;
  return (
    <div
      className={`itemx-center mx-auto flex flex-col xl:max-w-[1170px] ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}
