import { Builder } from '@builder.io/react';

import './Hero/Hero.builder';
import './TitleCard/TitleCard.builder';
import './ImageContent/ImageContent.builder';
import './VimeoPlayer/VimeoPlayer.builder';

Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Hero' },
    { name: 'Title Card'},
    { name: 'Image Content'},
    { name: 'Vimeo'}
  ],
})
