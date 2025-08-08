// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/index'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/payments',
        'guides/testing',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/charges',
        'api/customers',
        'api/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/openapi',
        'reference/errors',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
