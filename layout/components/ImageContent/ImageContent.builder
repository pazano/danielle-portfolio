import { Builder } from '@builder.io/react';
import ImageContent from './ImageContent';

Builder.registerComponent(ImageContent,
  {
    name: 'Image Content',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'image',
        type: 'file',
        helperText: 'File types: .jpeg .png',
        allowedFileTypes: ['jpeg', 'png'],
      },
      {
        name: 'orientation',
        type: 'string',
        enum: ['portrait', 'landscape']
      },
      {
        name: 'content',
        type: 'string'
      },
      {
        name: 'imageSide',
        type: 'string',
        copyOnAdd: false,
        helperText: 'changes the amount of vertical space',
        enum: [
          'left',
          'right'
        ]
      },
      {
        name: 'contentBackground',
        type: 'boolean'
      }
    ]
  })