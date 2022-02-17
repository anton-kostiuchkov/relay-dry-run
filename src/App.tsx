import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { graphql, useRelayEnvironment, QueryRenderer } from 'react-relay';
import { Suspense } from 'react';

import RelayEnvironment from './RelayEnvironment';
import type { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';
import type { App_Query } from './__generated__/App_Query.graphql';

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

const AppQueryRenderer = () => {
  const environment = useRelayEnvironment();

  return (
    <QueryRenderer<App_Query>
      environment={environment}
      variables={{}}
      query={graphql`
        query App_Query {
          api {
            currentUser {
              user {
                id
              }
            }
          }
        }
      `}
      render={({ props }) => {
        if (props) {
          return <h1>{props.api.currentUser.user.id}</h1>;
        }

        return <div>loading</div>;
      }}
    />
  );
};

const App = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <AppImpl preloadedQuery={preloadedQuery} />
      <AppQueryRenderer />
    </Suspense>
  </RelayEnvironmentProvider>
);

export default App;
