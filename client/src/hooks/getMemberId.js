import { getCookie } from '../utils/cookies';

const buffer = require('buffer').Buffer;

export const getMemberId = () => {
  const authorization = getCookie('token').slice(7);

  const decoded = buffer.from(authorization, 'base64').toString('utf-8');

  const memberId = Number(
    decoded.slice(decoded.indexOf('memberId') + 10, decoded.indexOf('sub') - 2),
  );

  return memberId;
};
