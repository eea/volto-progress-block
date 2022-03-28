import installProgressBlock from './ProgressBlock';

const applyConfig = (config) => {
  return [installProgressBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
