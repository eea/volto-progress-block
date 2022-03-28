import worldSVG from '@plone/volto/icons/world.svg';
import ProgressBlockEdit from './Edit';
import ProgressBlockView from './View';

export default (config) => {
  config.blocks.blocksConfig.progress_block = {
    id: 'progress_block',
    title: 'Progress block',
    icon: worldSVG,
    group: 'text',
    view: ProgressBlockView,
    edit: ProgressBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};
