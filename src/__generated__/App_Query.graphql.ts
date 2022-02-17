/**
 * @generated SignedSource<<25eb71753156b4cb3f9861c0dae3eb56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type App_Query$variables = {};
export type App_Query$data = {
  readonly api: {
    readonly currentUser: {
      readonly user: {
        readonly id: string | null;
      } | null;
    } | null;
  } | null;
};
export type App_Query = {
  variables: App_Query$variables;
  response: App_Query$data;
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
    "name": "App_Query",
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
    "name": "App_Query",
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
    "cacheID": "46cc5a5c464520c5193a1055cd2980f9",
    "id": null,
    "metadata": {},
    "name": "App_Query",
    "operationKind": "query",
    "text": "query App_Query {\n  api {\n    currentUser {\n      user {\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9814351fe2ee66c111cbcc1a6f788d9b";

export default node;
