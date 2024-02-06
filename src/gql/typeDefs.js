import { mergeTypeDefs } from '@graphql-tools/merge';

import { authorTypeDefs } from './author/typeDef.js';
import { gameTypeDefs } from './game/typeDef.js';
import { reviewTypeDefs } from './review/typeDef.js';
 
export const typeDefs = mergeTypeDefs([gameTypeDefs, authorTypeDefs, reviewTypeDefs]);
