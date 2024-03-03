export type IconPosition = 'start' | 'end';

export type CollapseItemProps = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type AccordionDefaultValue = string[];

export type OnActiveChangeFunc = (newValue: string) => void;

export type AccordionContextType = {
  active: AccordionDefaultValue;
  onActiveChange: OnActiveChangeFunc;
};
