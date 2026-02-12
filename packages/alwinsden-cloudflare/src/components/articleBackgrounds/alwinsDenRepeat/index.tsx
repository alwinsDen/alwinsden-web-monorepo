import type { ReactNode, CSSProperties } from 'react';

type AlwinsDenRepeatProps = {
  children: ReactNode;
};

const containerStyle: CSSProperties = {
  minHeight: '100dvh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  background: '#ffffff',
  borderTop: '5px #F3DB00 solid',
};

export function AlwinsDenRepeat({ children }: AlwinsDenRepeatProps) {
  return <div style={containerStyle}>{children}</div>;
}
