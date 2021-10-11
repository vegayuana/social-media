import Wrapper from '../index';
import { create } from 'react-test-renderer';

describe('Tooltip', () => {
  it('renders correctly', () => {
    create(
      <Wrapper/>
    ).root;
  });
});
