import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType('wpcb/hero', {
  title: 'Hero Block',
  category: 'design',

  attributes: {
    title: { type: 'string', default: 'Título do Hero' },
    text: { type: 'string', default: 'Descrição aqui...' },
    buttonText: { type: 'string', default: 'Clique aqui' },
    backgroundColor: { type: 'string', default: '#000000' },
  },

  edit: Edit,
  save: Save,
});
