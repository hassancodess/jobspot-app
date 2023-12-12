import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: Env.NAME,
	description: `${Env.NAME} Mobile App`,
	slug: 'jobspot',
	version: Env.VERSION.toString(),
	orientation: 'portrait',
	scheme: 'jobspot',
	experiments: {
		typedRoutes: true,
		// tsconfigPaths: true,
	},
	icon: './assets/icon.png',
	userInterfaceStyle: 'automatic',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#130160',
	},
	assetBundlePatterns: ['**/*'],
	web: {
		bundler: 'metro',
		output: 'static',
		favicon: './assets/favicon.png',
	},
	ios: {
		bundleIdentifier: Env.BUNDLE_ID,
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/adaptive-icon.png',
			backgroundColor: '#130160',
		},
		package: Env.PACKAGE,
	},
	plugins: [
		'expo-router',
		'expo-localization',
		[
			'expo-build-properties',
			{
				android: {
					kotlinVersion: '1.7.22',
				},
			},
		],
		[
			'app-icon-badge',
			{
				enabled: Env.APP_ENV !== 'production',
				badges: [
					{
						text: Env.APP_ENV,
						type: 'banner',
						color: 'white',
					},
					{
						text: Env.VERSION.toString(),
						type: 'ribbon',
						color: 'white',
					},
				],
			},
		],
	],
	extra: {
		...ClientEnv,
	},
});
