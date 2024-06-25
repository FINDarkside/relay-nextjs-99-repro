import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { BFragment$key } from '../../types/__generated__/BFragment.graphql';

const query = graphql`
  fragment BFragment on Query {
    bar
  }
`;

const B = ({ fragmentRef }: { fragmentRef: BFragment$key }) => {
  const data = useFragment(query, fragmentRef);

  return <div>{data.bar}</div>;
};

export default B;
