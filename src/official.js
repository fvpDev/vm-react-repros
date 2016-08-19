import ViewModel from 'viemodel-react';

ViewModel.mixin({
	official: {
		name: '',
		position: '',
		title() { return [this.position(), this.name()].join(' ') },
		title2() { return this.position() + ' ' + this.name() }
	}
})