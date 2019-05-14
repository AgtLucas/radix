import styled from '@emotion/styled';
import css from '@styled-system/css';
import { themeGet } from 'styled-system';

export const Code = styled('code')(props =>
  css({
    backgroundColor: 'blues.1',
    color: 'blue',
    borderColor: 'grays.3',
    borderRadius: 1,
    fontFamily: 'mono',
    fontSize: '0.75em',
    letterSpacing: 0,
    lineHeight: 'inherit',
    paddingY: `calc(${themeGet('space.1')(props)} / 2)`,
    paddingX: 1,
    whiteSpace: 'nowrap',
  })
);
