import { IContextualMenuStyleProps, IContextualMenuStyles } from './ContextualMenu.types';
import { getGlobalClassNames, FontWeights } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-ContextualMenu',
  container: 'ms-ContextualMenu-container',
  list: 'ms-ContextualMenu-list',
  header: 'ms-ContextualMenu-header',
  title: 'ms-ContextualMenu-title',
  isopen: 'is-open'
};

export const getStyles = (props: IContextualMenuStyleProps): IContextualMenuStyles => {
  const { className, theme } = props;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const { palette, fonts, semanticColors } = theme;

  const ContextualMenuItemHeight = '32px';

  return {
    root: [
      classNames.root,
      classNames.isopen,
      {
        backgroundColor: semanticColors.bodyBackground,
        minWidth: '180px'
      },
      className
    ],
    container: [
      classNames.container,
      {
        selectors: {
          ':focus': { outline: 0 }
        }
      }
    ],
    list: [
      classNames.list,
      classNames.isopen,
      {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        lineHeight: '0'
      }
    ],
    header: [
      classNames.header,
      fonts.small,
      {
        fontWeight: FontWeights.semibold,
        color: semanticColors.menuHeader,
        background: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        height: ContextualMenuItemHeight,
        lineHeight: ContextualMenuItemHeight,
        cursor: 'default',
        padding: '0px 6px',
        userSelect: 'none',
        textAlign: 'left'
      }
    ],
    title: [
      classNames.title,
      {
        fontSize: '16px',
        paddingRight: '14px',
        paddingLeft: '14px',
        paddingBottom: '5px',
        paddingTop: '5px',
        backgroundColor: palette.neutralLight
      }
    ]
  };
};
