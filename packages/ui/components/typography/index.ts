import TypographyOrigin from './typography';
import Title from './title';

export type TypographyProps = typeof TypographyOrigin & {
  Title: typeof Title;
};

const Typography = TypographyOrigin as TypographyProps;

Typography.Title = Title;

export default Typography;
