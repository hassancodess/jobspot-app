module.exports = function (api) {
	api.cache(true);
	const plugins = [];

	plugins.push([
		'@tamagui/babel-plugin',
		{
			components: ['tamagui'],
			config: './tamagui.config.ts',
		},
	]);

	plugins.push('expo-router/babel');

	plugins.push([
		'module-resolver',
		{
			root: ['./'],
			alias: {
				'@env': 'src/utils/env.js',
			},
			extensions: [
				'.ios.ts',
				'.android.ts',
				'.ts',
				'.ios.tsx',
				'.android.tsx',
				'.tsx',
				'.jsx',
				'.js',
				'.json',
			],
		},
	]);

	return {
		presets: ['babel-preset-expo'],
		plugins,
	};
};
