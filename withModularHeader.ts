import { ConfigPlugin, withDangerousMod } from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

const withModularHeaders: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(config.modRequest.projectRoot, 'ios', 'Podfile');
      let podfileContent = fs.readFileSync(podfilePath, 'utf-8');

      if (!podfileContent.includes('use_modular_headers!')) {
        podfileContent = podfileContent.replace(
          /require_relative '\.\.\/node_modules\/react-native\/scripts\/react_native_pods'/,
          `require_relative '../node_modules/react-native/scripts/react_native_pods'\nuse_modular_headers!`
        );
        fs.writeFileSync(podfilePath, podfileContent);
      }

      return config;
    },
  ]);
};

export default withModularHeaders;
