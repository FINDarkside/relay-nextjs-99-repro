/**
 * @generated SignedSource<<6bbe58ef52d8835797f41701b5d1bfe5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AFragment$data = {
  readonly foo: string | null | undefined;
  readonly " $fragmentType": "AFragment";
};
export type AFragment$key = {
  readonly " $data"?: AFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "foo",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "39c8bc244e2f63a5d5c63c582cd68a4c";

export default node;
