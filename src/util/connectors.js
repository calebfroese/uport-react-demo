import {
    Connect,
    SimpleSigner
} from 'uport-connect'
import {
    SIGN_KEY
} from '../secrets'

export const uport = new Connect('Caleb Froese\'s React App', {
    clientId: '2ohgvXAEpnFWxRxbxFySPr8Ne7E19eS6XBd',
    network: 'rinkeby',
    signer: SimpleSigner(SIGN_KEY)
})

// Request credentials to login
// uport.requestCredentials({
//   requested: ['name', 'phone', 'country'],
//   notifications: true // We want this if we want to recieve credentials
// })
// .then((credentials) => {
//   console.log(credentials);
// })

// Attest specific credentials
// uport.attestCredentials({
//   sub: THE_RECEIVING_UPORT_ADDRESS,
//   claim: {
//     CREDENTIAL_NAME: CREDENTIAL_VALUE
//   },
//   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })