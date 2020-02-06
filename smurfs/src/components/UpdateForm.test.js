import axios from 'axios'
import UpdateForm from './UpdateForm'

jest.mock('axios');

test('component gets smurfs array', async () => {
const smurfs = [{
    name: 'something smurf',
    age : 23,
    height: '200 feet',
    id: 0
}]
const resp = {data: smurfs}
axios.get.mockResolvedValue(resp));
return UpdateForm.all().then(data => expect(data).toBe(smurfs));
}