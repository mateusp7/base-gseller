import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://dev-siri.gseller.com.br/admin-api',
  documents: ['./src/**/*.graphql'],

  generates: {
    './src/utils/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content: '// @ts-nocheck'
          }
        },
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],

      config: {
        fetch: 'graphql-request'
      }
    }
  }
}

export default config
