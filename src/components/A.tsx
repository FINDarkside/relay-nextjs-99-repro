import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { AFragment$key } from '../../types/__generated__/AFragment.graphql';

const query = graphql`
  fragment AFragment on Query {
    foo
  }
`;

const A = ({ fragmentRef }: { fragmentRef: AFragment$key }) => {
  const data = useFragment(query, fragmentRef);

  return <div>{data.foo}</div>;
};

export default A;
