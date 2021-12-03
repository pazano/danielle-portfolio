import { Builder } from '@builder.io/react';
import PortfolioGallery from './PortfolioGallery';

Builder.registerComponent(PortfolioGallery,
  {
    name: 'Portfolio Gallery',
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
        name: 'rowSize',
        type: 'string',
        helperText: 'Width of a row (Portrait = 1, Landscape = 2)',
        copyOnAdd: false,
        defaultValue: '4',
        enum: [ '2', '4' ]
      }
    ]
  })