import type { CodegenConfig } from '@graphql-codegen/cli';

const DEV_API_URI = 'http://localhost:9001/graphql';

const config: CodegenConfig = {
  overwrite: true,
  schema: DEV_API_URI,
  documents: 'src/**/*.graphql',
  generates: {
    'src/api/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        'add',
      ],
      config: {
        pureMagicComment: true,
        fetcher: {
          func: '~/core/axios#fetchData',
          isReactHook: false,
        },
        dedupeOperationSuffix: true,
        content: '// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)',
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ['eslint --ext ts --fix', 'prettier --write src'],
  },
};

export default config;
