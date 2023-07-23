import {create} from 'react-test-renderer';
import { HookApp} from '../HookApp';

describe('Pruebas en <HookApp />',() => {

    test('debe de mostrarse correctamente', () => { 

        const wrapper = create(<HookApp />);

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
} )