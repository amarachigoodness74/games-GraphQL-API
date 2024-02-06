import { mergeResolvers } from '@graphql-tools/merge';

import { authorResolver } from './author/resolver.js';
import { gameResolver } from './game/resolver.js';
import { reviewResolver } from './review/resolver.js';

export const resolvers = mergeResolvers([gameResolver, authorResolver, reviewResolver]);
