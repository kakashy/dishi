import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/kakashy/dishi.git', // Update to point to your repository
		user: {
			name: 'Kakashy', // update to use your name
			email: 'josephwawerug@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
