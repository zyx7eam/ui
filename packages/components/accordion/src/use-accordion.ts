import { machine, connect, Context } from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';

type As<Props = any> = React.ElementType<Props>;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The ref to the DOM node.
   */
  ref?: React.Ref<HTMLDivElement | null>;
}

// props type
export type UseAccordion = Context;

// return type
export type UseAccordionReturn = ReturnType<typeof connect>;

export function useAccordion(props: UseAccordion): UseAccordionReturn {
  const { ...__props } = props;

  const [state, send] = useMachine(machine({ ...__props }));

  const api = connect(state, send, normalizeProps);

  return {
    ...api,
  };
}
