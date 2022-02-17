import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { graphql } from 'react-relay';
import { Suspense } from 'react';

import RelayEnvironment from './RelayEnvironment';
import type { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    api {
      currentUser {
        user {
          id
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

function AppImpl(props) {
  const data = usePreloadedQuery<AppRepositoryNameQuery>(
    RepositoryNameQuery,
    props.preloadedQuery,
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.api.currentUser.user.id}</p>
      </header>
    </div>
  );
}

const App = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <AppImpl preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>
);

export default App;
