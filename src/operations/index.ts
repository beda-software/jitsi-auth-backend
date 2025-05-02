import * as jose from 'jose';

import { TOperation } from '../typings';
import { generateOperationOutcome } from '../utils';

export const getJitsiAuthToken: TOperation = {
    method: 'POST',
    path: ['auth', '$jitsi-token'],
    handlerFn: async (request) => {
        const tokenExpirationPeriod = '1d';
        const secret = process.env.AUTH_JWT_SECRET;
        if (!secret) {
            throw generateOperationOutcome({ diagnostics: 'AUTH_JWT_SECRET is not specified' });
        }

        const issuer = process.env.AUTH_JWT_ACCEPTED_ISSUERS;
        if (!issuer) {
            throw generateOperationOutcome({
                diagnostics: 'AUTH_JWT_ACCEPTED_ISSUERS is not specified',
            });
        }

        const audience = process.env.AUTH_JWT_ACCEPTED_AUDIENCES;
        if (!audience) {
            throw generateOperationOutcome({
                diagnostics: 'AUTH_JWT_ACCEPTED_AUDIENCES is not specified',
            });
        }

        const token_secret = new TextEncoder().encode(secret);
        const jwt = await new jose.SignJWT({
            room: '*',
            context: { user: { id: request['oauth/user'].id } },
        })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setIssuer(issuer)
            .setAudience(audience)
            .setSubject('*')
            .setExpirationTime(tokenExpirationPeriod)
            .sign(token_secret);

        return { status: 200, resource: { jwt } };
    },
};
