/**
 * @generated SignedSource<<57fe721e738633b9a23ecc51704439e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type relayTestQuery$variables = {
  includeA: boolean;
  includeB: boolean;
};
export type relayTestQuery$data = {
  readonly test: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AFragment" | "BFragment">;
};
export type relayTestQuery = {
  response: relayTestQuery$data;
  variables: relayTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "includeA"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "includeB"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "test",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "relayTestQuery",
    "selections": [
      (v1/*: any*/),
      {
        "condition": "includeA",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AFragment"
          }
        ]
      },
      {
        "condition": "includeB",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BFragment"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "relayTestQuery",
    "selections": [
      (v1/*: any*/),
      {
        "condition": "includeA",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "foo",
            "storageKey": null
          }
        ]
      },
      {
        "condition": "includeB",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bar",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "390817c77eee1a7bf107f17140aeaba7",
    "id": null,
    "metadata": {},
    "name": "relayTestQuery",
    "operationKind": "query",
    "text": "query relayTestQuery(\n  $includeA: Boolean!\n  $includeB: Boolean!\n) {\n  test\n  ...AFragment @include(if: $includeA)\n  ...BFragment @include(if: $includeB)\n}\n\nfragment AFragment on Query {\n  foo\n}\n\nfragment BFragment on Query {\n  bar\n}\n"
  }
};
})();

(node as any).hash = "894f086726b1be34a61fce469ff1a275";

export default node;
