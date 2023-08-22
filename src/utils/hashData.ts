import * as bcrypt from 'bcrypt';

const hashData = (data: string) => bcrypt.hash(data, 10);
export default hashData;
