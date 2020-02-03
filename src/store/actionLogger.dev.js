import { createLogger } from 'redux-logger';

export default createLogger({
  collapsed: true,
  duration: true,
  actionTransformer: (action) => ({
    ...action,
    type: action.type.includes('/')
      ? action.type.substr(action.type.lastIndexOf('/') + 1)
      : action.type,
  }),
});
