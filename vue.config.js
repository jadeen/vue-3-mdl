module.exports = {
  chainWebpack: config => {
    config.plugin('copy')
      .tap(([pathConfigs
      ]) => {
        const to = pathConfigs[0].to;

        pathConfigs[0].force = true; // so the original `/public` folder keeps priority
        // add other locations.
        pathConfigs.unshift({
          from: 'node_modules/material-design-lite',
          to: to + '/mdl',
        });

        return [pathConfigs];
      });
  }
}