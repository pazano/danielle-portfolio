import { Builder } from '@builder.io/react';
import { layoutControls } from '../BuilderAdminParts';
import Gallery from './Gallery';

Builder.registerComponent(Gallery,
  {
    name: 'Gallery',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'galleryImages',
        type: 'list',
        copyOnAdd: false,
        subFields: [
          {
            name: 'image',
            type: 'reference',
            modelId: '62250208cae5453095dbaf4bd9c43a31'
          }
        ],
      },
      {
        name: 'columns',
        type: 'string',
        defaultValue: 'four',
        enum: [
          'two', 'three', 'four'
        ]
      },
      layoutControls,
    ]
  })