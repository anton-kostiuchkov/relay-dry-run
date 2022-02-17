/**
 * @generated SignedSource<<cbf48e76d180314d01beaf83a201122c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryNameQuery$variables = {};
export type AppRepositoryNameQuery$data = {
  readonly api: {
    readonly currentUser: {
      readonly user: {
        readonly id: string | null;
      } | null;
    } | null;
  } | null;
};
export type AppRepositoryNameQuery = {
  variables: AppRepositoryNameQuery$variables;
  response: AppRepositoryNameQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ApiType",
        "kind": "LinkedField",
        "name": "api",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CurrentUser",
            "kind": "LinkedField",
            "name": "currentUser",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ApiType",
        "kind": "LinkedField",
        "name": "api",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CurrentUser",
            "kind": "LinkedField",
            "name": "currentUser",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0baa1e913663171faba564e3e7b1736e",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  api {\n    currentUser {\n      user {\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "737db12c6cd6db159e8559960b7cbbdd";

export default node;
