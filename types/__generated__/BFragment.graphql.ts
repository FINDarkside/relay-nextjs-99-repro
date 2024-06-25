/**
 * @generated SignedSource<<9ea447a976dde22b88a4bf302a9495db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BFragment$data = {
  readonly bar: string | null | undefined;
  readonly " $fragmentType": "BFragment";
};
export type BFragment$key = {
  readonly " $data"?: BFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bar",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "795e191be396d414e3b62c1deba8e3be";

export default node;
