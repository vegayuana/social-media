import Wrapper from '../index';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../../styles';

describe('Form', () => {
  it('renders default', () => {
    create(
      <ThemeProvider theme={theme}>
        <Wrapper/>
      </ThemeProvider>
    ).root;
  });
  it('renders with formFields', () => {
    create(
      <ThemeProvider theme={theme}>
        <Wrapper
          formFields={[{
            name: 'title',
            placeholder: 'Title',
            defaultValue: ''
          },{
            name: 'body',
            label: 'comment',
            placeholder: 'Write something on body post',
            defaultValue: '',
            type: 'textarea'
          }]}
          title={'New Comment'}
          handleCancel={()=>jest.fn()}
        />
      </ThemeProvider>
    ).root;
  });
});
