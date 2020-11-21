'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

const ensureSlash = (path, needsSlash) => {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

module.exports = {
  appAdmin: resolveApp('src/apps/admin_app'),
  appGuest: resolveApp('src/apps/guest_app'),
  appLocalization: resolveApp('src/localization'),
  appMain: resolveApp('src/apps/main_app'),
  appPublic: resolveApp('public'),
  appStyles:  resolveApp('src/styles'),
  appUser: resolveApp('src/apps/user_app'),
};
